import {
  BadRequestException,
  Body,
  Controller,
  HttpStatus,
  NotFoundException,
  Patch,
  Post,
  Put,
  Res,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { RegisterDto } from './dtos/register.dto';
import { Response, Request } from 'express';
import * as bcrypt from 'bcryptjs';
import { ProfileDto } from './dtos/profile.dto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  @Post('register')
  async register(@Body() body: RegisterDto) {
    const { password, confirmPassword } = body;
    if (password != confirmPassword) throw new BadRequestException();
    const hashedPassword = bcrypt.hash(password, 12);
    await this.userService.save({
      fullname: `${body.first_name} ${body.last_name}`,
      email: body.email,
      password: hashedPassword,
    });
  }

  @Post('login')
  async login(
    @Res({ passthrough: true }) response: Response,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const userToLoginWith = await this.userService.findOne({ email });
    if (!userToLoginWith) throw new NotFoundException();
    if (!bcrypt.compare(userToLoginWith.password, password))
      throw new BadRequestException();
    this.refreshJwt(email, response);
    return {
      success: true,
    };
  }

  @UseGuards(AuthGuard)
  @Put('update-profile')
  async updateProfile(@Body() body: ProfileDto) {
    const { fullname, email } = body;
    const user = await this.userService.findOne({ email });
    if (!user) throw new NotFoundException();
    await this.userService.update({
      ...user,
      fullname,
      email,
    });
    return HttpStatus.CREATED;
  }

  @UseGuards(AuthGuard)
  @Patch('update-password')
  async updatePassword(
    @Body('oldPassword') oldPassword: string,
    @Body('password') password: string,
    @Res() response: Response,
    @Req() request: Request,
  ) {
    const jwtUserInfo = this.jwtService.decode(request.cookies['jwt']);
    const user = await this.userService.findOne({
      email: jwtUserInfo['email'],
    });
    if (!bcrypt.compare(user.password, oldPassword))
      throw new NotFoundException();
    const hashedPassword = bcrypt.hash(password, 12);
    await this.userService.update({
      ...user,
      password: hashedPassword,
    });
    this.refreshJwt(user.email, response);
    return HttpStatus.NO_CONTENT;
  }

  private refreshJwt(email: string, response: Response) {
    const jwt = this.jwtService.sign({ email: email });
    response.cookie('jwt', jwt);
  }
}

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User } from './entities/user.enitie';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUsers(options): Promise<User[]> {
    return await this.userService.find(options);
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    return await this.userService.findOne(Number(id));
  }

  //  @Post()
  //  createUser(@Body() body: CreateUserDto): User {
  //   return this.userService.createUser(body);

  //  }
}

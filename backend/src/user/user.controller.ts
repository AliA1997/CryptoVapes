import { Controller, Get } from '@nestjs/common';
import { User } from '../model/user';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  //   @Get('/:id')
  //  async getUser(){
  //     return ` Welcome ${User.arguments}`
  //   }
}

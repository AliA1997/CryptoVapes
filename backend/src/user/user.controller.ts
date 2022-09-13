import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User } from './entities/user.enitie';

@Controller('user')
export class UserController {
  constructor (private userService: UserService) {
  }

   @Get()
   getUsers(): User[] {
    return this.userService.findAll()
   }

   @Get(':id')
   getUserById(@Param('id') id: string): User {
      return this.userService.findById(Number(id));
   }


  //  @Post()
  //  createUser(@Body() body: CreateUserDto): User {
  //   return this.userService.createUser(body);

  //  }

  
    
}

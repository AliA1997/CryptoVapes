import { Injectable, HttpException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

// import { USERS } from './users.mock';

@Injectable()
export class UserService {
  
  private users: any = [{ id: 0, name: 'MothePro'}];

  findAll(){
    return this.users;
  }

  findById(userId: number){
    return this.users.find(user => user.id === userId);

  }


  createUser(createUserDto: CreateUserDto){
    const newUser = {
      id: Date.now(), ...createUserDto
    };

    this.users.push(newUser);
  }

  public  async getUsers() {
    return 
      this.users;
    
  }

  }


import { Injectable, HttpException } from '@nestjs/common';

import { USERS } from './users.mock';

@Injectable()
export class UserService {
  findOne(arg0: { email: string; }) {
    throw new Error('Method not implemented.');
  }   
  private users = USERS;
  public  async getUsers() {
    return 
      this.users;
    
  }

  }


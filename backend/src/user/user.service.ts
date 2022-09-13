import { Injectable, HttpException } from '@nestjs/common';
import { User } from '../model/user';
import { SharedService } from '../shared/shared.service';
import { getCustomRepository, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService extends SharedService {
  users: any;
  constructor(


    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    
  ) {
    super(userRepository);
  }

  // private users = User;

  public  getUserById(id: number) {
    const user = this.users.find((user: { id: number; }) => user.id === id);
    if(user) {
      throw new HttpException('User Not Found', 404);
    }
      return user
  }
}

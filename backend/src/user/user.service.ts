import { Injectable } from '@nestjs/common';
import { User } from '../model/user';
import { SharedService } from '../shared/shared.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService extends SharedService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    super(userRepository);
  }
}

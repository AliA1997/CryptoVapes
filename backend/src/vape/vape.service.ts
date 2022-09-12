import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vape } from '../model/vape';
import { SharedService } from '../shared/shared.service';
import { Repository } from 'typeorm';

@Injectable()
export class VapeService extends SharedService {
  constructor(
    @InjectRepository(Vape)
    private readonly vapeRepository: Repository<Vape>,
  ) {
    super(vapeRepository);
  }
}

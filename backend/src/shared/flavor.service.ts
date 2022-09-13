import { InjectRepository } from '@nestjs/typeorm';
import { Flavor } from '../model/flavor';
import { Repository } from 'typeorm';
import { SharedService } from './shared.service';

export class FlavorService extends SharedService {
  constructor(
    @InjectRepository(Flavor)
    private readonly flavorRepository: Repository<Flavor>,
  ) {
    super(flavorRepository);
  }
}

import { Controller, Get } from '@nestjs/common';
import { VapeService } from './vape.service';

@Controller('vapes')
export class VapeController {
  constructor(private vapeService: VapeService) {}

  // async findRecentVapes() {

  // }
}

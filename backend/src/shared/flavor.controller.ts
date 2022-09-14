import { Controller, Get } from '@nestjs/common';
import { User } from '../model/user';
import { FlavorService } from './flavor.service';
@Controller('flavors')
export class FlavorController {
  constructor(private flavorService: FlavorService) {}

  @Get()
  async getFlavors(options) {
    return await this.flavorService.find(options);
  }
}

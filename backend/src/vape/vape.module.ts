import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vape } from 'src/model/vape';
import { FlavorService } from 'src/shared/flavor.service';
import { VapeController } from './vape.controller';
import { VapeService } from './vape.service';

@Module({
  imports: [TypeOrmModule.forFeature([Vape])],
  controllers: [VapeController],
  providers: [VapeService],
})
export class VapeModule {}

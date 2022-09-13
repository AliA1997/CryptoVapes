import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vape } from '../model/vape';
import { VapeController } from './vape.controller';
import { VapeService } from './vape.service';

@Module({
  imports: [TypeOrmModule.forFeature([Vape])],
  controllers: [VapeController],
  providers: [VapeService],
})
export class VapeModule {}

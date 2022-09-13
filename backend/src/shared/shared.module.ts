import { CacheModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import * as redisStore from 'cache-manager-redis-store';
import { RedisService } from './redis.service';
import { secret } from '../utils/constants';
import { FlavorController } from './flavor.controller';
import { FlavorService } from './flavor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flavor } from '../model/flavor';

@Module({
  imports: [
    TypeOrmModule.forFeature([Flavor]),
    JwtModule.register({
      secret: secret,
    }),
    CacheModule.register({
      store: redisStore,
      host: 'redis',
      port: 6379,
    }),
  ],
  controllers: [FlavorController],
  providers: [RedisService, FlavorService],
  exports: [JwtModule, CacheModule, RedisService, FlavorService],
})
export class SharedModule {}

/* eslint-disable @typescript-eslint/no-unused-vars */
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { JwtModule } from '@nestjs/jwt';
import { secret } from './utils/constants';
import { join } from 'path/posix';
import { User, UserSchema } from './model/user.schema';
import { WalletType, WalletTypeSchema } from './model/walletType.schema';
import { Wallet, WalletSchema } from './model/wallet.schema';
import { Flavor, FlavorSchema } from './model/flavor.schema';
import { Vape, VapeSchema } from './model/vape.schema';
import { WalletController } from './controller/wallet.controller';
import { UserController } from './controller/user.controller';
import { isAuthenticated } from './app.middleware';
import { ConfigModule } from '@nestjs/config';

//Let nestjs know that the wallets and users exits
@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      secret: secret,
      signOptions: { expiresIn: '8h' },
    }),
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: WalletType.name,
        schema: WalletTypeSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: Wallet.name,
        schema: WalletSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: Flavor.name,
        schema: FlavorSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: Vape.name,
        schema: VapeSchema,
      },
    ]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/Stream'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(isAuthenticated)
      .exclude({ path: 'api/v1/user/:id', method: RequestMethod.GET })
      .forRoutes(UserController, WalletController);
  }
}

/* eslint-disable @typescript-eslint/no-unused-vars */
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { secret } from './utils/constants';
import { User } from './model/user';
// import { WalletType } from './model/walletType';
// import { Wallet } from './model/wallet';
import { Flavor } from './model/flavor';
import { Vape } from './model/vape';
import { isAuthenticated } from './app.middleware';
import { UserModule } from './user/user.module';
import { VapeModule } from './vape/vape.module';
import { AuthModule } from './auth/auth.module';
import { AccessoriesModule } from './accessories/accessories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from './shared/shared.module';
// import { PaymentType } from './model/paymentType';
//Let nestjs know that the wallets and users exits
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'database',
      port: 3306,
      database: 'dev',
      username: 'root',
      password: 'root',
      autoLoadEntities: true,
      synchronize: true,
      entities: [User, Vape, Flavor],
    }),
    UserModule,
    VapeModule,
    AuthModule,
    AccessoriesModule,
    SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(isAuthenticated)
      .exclude({ path: 'api/v1/user/:id', method: RequestMethod.GET })
      .forRoutes(AppController);
  }
}

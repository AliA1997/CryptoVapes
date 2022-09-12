/* eslint-disable @typescript-eslint/no-unused-vars */
import { User } from './user';
import { WalletType } from './walletType';
import { PaymentType } from './paymentType';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Wallet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  cryptoAddress: string;

  @OneToOne(() => PaymentType, { cascade: true })
  @JoinColumn({ name: 'payment_type_id' })
  paymentType: PaymentType;

  @OneToOne(() => WalletType, { cascade: true })
  @JoinColumn({ name: 'wallet_type_id' })
  walletType: WalletType;

  @OneToOne(() => User, { cascade: true })
  @JoinColumn({ name: 'user_id' })
  ownedBy: User;
}

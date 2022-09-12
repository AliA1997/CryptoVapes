/* eslint-disable @typescript-eslint/no-unused-vars */
import { Flavor } from './flavor';
import { User } from './user';
import {
  Column,
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Vape {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  thumbnail: string;

  @Column({ nullable: true })
  customEthereumPrice: number;

  @Column({ nullable: true })
  customBitcoinPrice: number;

  @Column({ nullable: true })
  customUsdcPrice: number;

  @Column({ nullable: false })
  price: number;

  @Column({ nullable: true })
  clearancePrice: number;

  @Column({ nullable: true })
  clearanceDate: Date;

  @OneToOne(() => Flavor, { cascade: true })
  @JoinColumn({ name: 'flavor_id' })
  flavor: Flavor;

  @OneToOne(() => User, { cascade: true })
  @JoinColumn({ name: 'user_id' })
  createdBy: User;
}

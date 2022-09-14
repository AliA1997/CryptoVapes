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

@Entity('vapes')
export class Vape {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  thumbnail: string;

  @Column({ nullable: true, type: 'decimal' })
  customEthereumPrice: number;

  @Column({ nullable: true, type: 'decimal' })
  customBitcoinPrice: number;

  @Column({ nullable: true, type: 'decimal' })
  customUsdcPrice: number;

  @Column({ nullable: false, type: 'decimal' })
  price: number;

  @Column({ nullable: true, type: 'decimal' })
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

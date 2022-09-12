/* eslint-disable @typescript-eslint/no-unused-vars */
import { User } from './user';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Flavor {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  thumbnail: string;
  @OneToOne(() => User, { cascade: true })
  @JoinColumn({ name: 'user_id' })
  createdBy: User;
}

import { Exclude } from 'class-transformer';
import moment from 'moment';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  static find(arg0: (user: any) => boolean) {
    throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ unique: true })
  email: string;

  @Exclude()
  @Column()
  identificationCardPublicKey: string;

  @Exclude()
  @Column()
  identificationCardPrivateKey: string;

  @Exclude()
  @Column()
  identificationCard: string;

  //Exclude password when retrieving it.
  @Exclude()
  @Column()
  password: string;
}

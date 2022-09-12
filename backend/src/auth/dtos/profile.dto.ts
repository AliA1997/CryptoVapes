import { IsEmail, IsNotEmpty } from 'class-validator';

export class ProfileDto {
  @IsNotEmpty()
  fullname: string;
  @IsEmail()
  email: string;
}

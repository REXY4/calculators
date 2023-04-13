import {
    IsEmail,
    IsNotEmpty,
    MinLength,
    IsDefined,
    Matches,
    IsString,
    IsDate
  } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
    @IsDefined()
    @IsString()
    @MinLength(3)
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    // @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S+$/)
    @IsDefined()
    @IsString()
    @MinLength(8)
    password: string;
}

export class LoginUserDto {
  @IsNotEmpty()
    @IsEmail()
    email: string;

  @IsNotEmpty()
    // @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S+$/)
    @IsDefined()
    @IsString()
    @MinLength(8)
    password: string;
}

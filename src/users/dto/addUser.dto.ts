import { IsInt, IsString , IsNotEmpty , IsEmail , ValidateNested, IsArray , ArrayNotEmpty  } from "class-validator";


class ProfileDto {
  @IsString()
  @IsNotEmpty()
  nickname: string;
}

export class addUser{
     @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  hoppies: string[];

  @ValidateNested()
  profile: ProfileDto;
}
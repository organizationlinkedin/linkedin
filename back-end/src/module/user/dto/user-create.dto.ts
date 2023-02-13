import {IsEmail, IsNotEmpty, IsString} from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    readonly username: string;
    @IsNotEmpty()
    readonly password: string;
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;
}
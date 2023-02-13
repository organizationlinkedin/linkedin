import { Injectable } from '@nestjs/common';
import { User } from '../user/model/user.model';
import { UserService } from '../user/user.service';
import * as bcrypt from "bcrypt";
import { JwtService } from '@nestjs/jwt';

export interface JWTPayload {
    id: string;
    email: string;
    username: string
}

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userService.getOne(email)
    if (await bcrypt.compare(password, user.password))
    {
        delete user.password
        return user as User
    }
    return null;
  }
  async login(email: string, password: string) {
    const userdata = await this.validateUser(email, password)
    if (userdata == null)
    {
      return {message: "email or password incorrect"}
    }
    const payload: JWTPayload = {
        id: userdata.id,
        email: userdata.email,
        username: userdata.username
    };
    return {
      access_token: await this.jwtService.signAsync(payload, {
        secret: process.env.JWT_SECRET,
      }),
    };
  }
}
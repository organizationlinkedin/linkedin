import { User } from '../user/model/user.model';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
export interface JWTPayload {
    id: string;
    email: string;
    username: string;
}
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<User>;
    login(email: string, password: string): Promise<{
        message: string;
        access_token?: undefined;
    } | {
        access_token: string;
        message?: undefined;
    }>;
}

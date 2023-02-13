import { CreateLoginDto } from './dto/login-create.dto';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';
import { User } from './model/user.model';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
export declare class UserController {
    private readonly _userService;
    private readonly _authService;
    constructor(_userService: UserService, _authService: AuthService);
    register(createUserDto: CreateUserDto): Promise<CreateUserDto & User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    getAll(): Promise<User[]>;
    login(user: CreateLoginDto): Promise<{
        message: string;
        access_token?: undefined;
    } | {
        access_token: string;
        message?: undefined;
    }>;
    getCurrent(user: User): Promise<User>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}

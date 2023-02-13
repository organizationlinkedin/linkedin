import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';
import { User } from './model/user.model';
export declare class UserService {
    private readonly _userRepository;
    constructor(_userRepository: Repository<User>);
    register(createUserDto: CreateUserDto): Promise<CreateUserDto & User>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    getAll(): Promise<User[]>;
    getOne(email: string): Promise<User>;
    deleteOne(id: string): Promise<import("typeorm").DeleteResult>;
}

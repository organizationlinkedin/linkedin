import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';
import { User } from './model/user.model';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly _userRepository: Repository<User>) {}

    async register(createUserDto:CreateUserDto) {
        return await this._userRepository.save(createUserDto)
    }

    async updateUser(id: string ,updateUserDto: UpdateUserDto) {
        return await this._userRepository.update(id, updateUserDto)
    }

    async getAll() {
        return await this._userRepository.find({where: {role: "user"}})
    }

    async getOne(email: string){
        return await this._userRepository.findOne({where: {email: email}})
    }

    async deleteOne(id: string) {
        return await this._userRepository.delete(id)
    }
}

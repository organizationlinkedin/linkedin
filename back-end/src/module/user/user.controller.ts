import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateLoginDto } from './dto/login-create.dto';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';
import { User } from './model/user.model';
import { GetUser } from './user.decorator';
import { UserService } from './user.service';
import * as bcrypt from "bcrypt";
import { AuthService } from '../auth/auth.service';

@Controller()
export class UserController {
    constructor(private readonly _userService: UserService,private readonly _authService: AuthService) {}

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
        const hash = await bcrypt.hash(createUserDto.password, 12)
        const user = await this._userService.register({...createUserDto, password: hash})
        return user

    }

    @Put('update-user/:id')
    async update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
        return await this._userService.updateUser(id, updateUserDto)
    }

    @Get('get-all')
    async getAll() {
        return await this._userService.getAll()
    }

    @Post('login')
    async login(@Body() user: CreateLoginDto) {
        return await this._authService.login(user.email,user.password)
    }

    @Get('get-current')
    async getCurrent(@GetUser() user: User) {
        return user
    }

    @Delete('delete/:id')
    async delete(@Param("id") id: string) {
        return await this._userService.deleteOne(id)
    }
}

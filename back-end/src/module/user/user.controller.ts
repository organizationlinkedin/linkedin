import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { CreateLoginDto } from './dto/login-create.dto';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';
import { User } from './model/user.model';
import { GetUser } from './user.decorator';
import { UserService } from './user.service';
import * as bcrypt from "bcrypt";
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/jwt-authguard';

@Controller()
export class UserController {
    constructor(private readonly _userService: UserService,private readonly _authService: AuthService) {}

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
        const hash = await bcrypt.hash(createUserDto.password, 12)
        const user = await this._userService.register({...createUserDto, password: hash})
        return user
    }

    @UseGuards(JwtAuthGuard)
    @Put('update-user')
    async update(@Body() updateUserDto: UpdateUserDto, @GetUser() user: User, @Req() req,) {
        if (req.body.password)
        {
            const hash = await bcrypt.hash(updateUserDto.password, 12)
            req.body.password = hash;
            return await this._userService.updateUser(user.id, updateUserDto)
        }
        return await this._userService.updateUser(user.id, updateUserDto)
    }

    @UseGuards(JwtAuthGuard)
    @Get('get-all')
    async getAll() {
        return await this._userService.getAll()
    }

    @Post('login')
    async login(@Body() user: CreateLoginDto) {
        return await this._authService.login(user.email,user.password)
    }

    @UseGuards(JwtAuthGuard)
    @Get('get-current')
    async getCurrent(@GetUser() user: User) {
        return user
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    async delete(@Param("id") id: string) {
        return await this._userService.deleteOne(id)
    }
}

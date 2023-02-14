import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-authguard';
import { User } from '../user/model/user.model';
import { GetUser } from '../user/user.decorator';
import { CreatePostDto } from './dto/post-create.dto';
import { UpdatePostDto } from './dto/post-update.dto';
import { Feed } from './model/post.model';
import { PostService } from './post.service';

@Controller()
export class PostController {
    constructor(private readonly _postService: PostService) {}
    
    @UseGuards(JwtAuthGuard)
    @Post('add-post')
    async addPost(@Body() createPostDto: CreatePostDto, @GetUser() user:User): Promise<Feed> {
       return await this._postService.addPost(createPostDto, user)
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete-post/:id')
    async delete(@Param("id") id: string) {
        return await this._postService.deletePost(id)
    }

    @UseGuards(JwtAuthGuard)
    @Put('update-post/:id')
    async update(@Param("id") id: string, @Body() updatePostDto: UpdatePostDto) {
        return await this._postService.updatePost(id, updatePostDto)
    }

    @Get('get-all-posts')
    async getAllPosts() {
        return await this._postService.getAllPosts()
    }
}

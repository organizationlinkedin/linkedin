import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-authguard';
import { User } from '../user/model/user.model';
import { GetUser } from '../user/user.decorator';
import { CreateCommentDto } from './dto/comment-create.dto';
import { UpdateCommentDto } from './dto/comment-update.dto';
import { Comment } from './model/comment.model';
import { CommentService } from './comment.service';

@Controller()
export class CommentController {
    constructor(private readonly _commentService: CommentService) {}
    
    @UseGuards(JwtAuthGuard)
    @Post('post/:id')
    async createComment(@Param("id") id: string, @Body() createCommentDto: CreateCommentDto, @GetUser() user:User): Promise<Comment> {
       return await this._commentService.addComment(id, createCommentDto, user)
    }


}

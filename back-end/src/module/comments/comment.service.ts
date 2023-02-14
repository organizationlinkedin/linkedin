import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feed } from '../post/model/post.model';
import { User } from '../user/model/user.model';
import { CreateCommentDto } from './dto/comment-create.dto';
import { UpdateCommentDto } from './dto/comment-update.dto';
import { Comment } from './model/comment.model';

@Injectable()
export class CommentService {
    constructor(@InjectRepository(Comment) private readonly _commentRepository: Repository<Comment>,
    @InjectRepository(Feed) private readonly _postRepository: Repository<Feed>) {}

    async addComment(postId: string,createCommentDto:CreateCommentDto, user: User): Promise<Comment> {
        const post = await this._postRepository.findOne({ where: { id: postId }});
        return await this._commentRepository.save({...createCommentDto, post, user})
    }

    
    
}

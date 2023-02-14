import { User } from '../user/model/user.model';
import { CreateCommentDto } from './dto/comment-create.dto';
import { Comment } from './model/comment.model';
import { CommentService } from './comment.service';
export declare class CommentController {
    private readonly _commentService;
    constructor(_commentService: CommentService);
    createComment(id: string, createCommentDto: CreateCommentDto, user: User): Promise<Comment>;
}

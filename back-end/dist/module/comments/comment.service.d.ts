import { Repository } from 'typeorm';
import { Feed } from '../post/model/post.model';
import { User } from '../user/model/user.model';
import { CreateCommentDto } from './dto/comment-create.dto';
import { Comment } from './model/comment.model';
export declare class CommentService {
    private readonly _commentRepository;
    private readonly _postRepository;
    constructor(_commentRepository: Repository<Comment>, _postRepository: Repository<Feed>);
    addComment(postId: string, createCommentDto: CreateCommentDto, user: User): Promise<Comment>;
}

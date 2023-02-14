import { User } from '../user/model/user.model';
import { CreatePostDto } from './dto/post-create.dto';
import { UpdatePostDto } from './dto/post-update.dto';
import { Feed } from './model/post.model';
import { PostService } from './post.service';
export declare class PostController {
    private readonly _postService;
    constructor(_postService: PostService);
    addPost(createPostDto: CreatePostDto, user: User): Promise<Feed>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<import("typeorm").UpdateResult>;
    getAllPosts(): Promise<Feed[]>;
}

import { Repository } from 'typeorm';
import { User } from '../user/model/user.model';
import { CreatePostDto } from './dto/post-create.dto';
import { UpdatePostDto } from './dto/post-update.dto';
import { Feed } from './model/post.model';
export declare class PostService {
    private readonly _postRepository;
    constructor(_postRepository: Repository<Feed>);
    addPost(createPostDto: CreatePostDto, user: User): Promise<Feed>;
    updatePost(id: string, updatePostDto: UpdatePostDto): Promise<import("typeorm").UpdateResult>;
    deletePost(id: string): Promise<import("typeorm").DeleteResult>;
    getAllPosts(): Promise<Feed[]>;
}

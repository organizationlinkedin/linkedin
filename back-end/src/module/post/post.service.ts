import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/model/user.model';
import { CreatePostDto } from './dto/post-create.dto';
import { UpdatePostDto } from './dto/post-update.dto';
import { Feed } from './model/post.model';

@Injectable()
export class PostService {
    constructor(@InjectRepository(Feed) private readonly _postRepository: Repository<Feed>) {}

    async addPost(createPostDto:CreatePostDto, user: User): Promise<Feed> {
        return await this._postRepository.save({...createPostDto, user})
    }

    async updatePost(id: string ,updatePostDto: UpdatePostDto) {
        return await this._postRepository.update(id, updatePostDto)
    }

    async deletePost(id: string) {
        return await this._postRepository.delete(id)
    }

    // async getAllPosts() {
    //     return await this._postRepository.find({relations: {user: true}})
    // }

    async getAllPosts() {
        return await this._postRepository
            .createQueryBuilder("feed")
            .leftJoin("feed.user", "user")
            .addSelect(["user.id", "user.username"])
            .getMany()
    }
    
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { Comment } from './model/comment.model';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { PostModule } from '../post/post.module';
import { Feed } from '../post/model/post.model';

@Module({
  imports: [TypeOrmModule.forFeature([Comment, Feed]), UserModule, PostModule],
  controllers: [CommentController],
  providers: [CommentService],
  exports:[CommentService]
})
export class CommentModule {}

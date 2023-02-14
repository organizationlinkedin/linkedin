import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { Feed } from './model/post.model';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [TypeOrmModule.forFeature([Feed]), UserModule],
  controllers: [PostController],
  providers: [PostService],
  exports:[PostService]
})
export class PostModule {}

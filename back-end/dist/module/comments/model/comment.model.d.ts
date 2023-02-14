import { Node } from "src/common/models/node.model";
import { Feed } from "src/module/post/model/post.model";
import { User } from "src/module/user/model/user.model";
export declare class Comment extends Node {
    description: string;
    post: Feed;
    postId: string;
    user: User;
    userId: string;
}

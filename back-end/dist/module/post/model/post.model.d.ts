import { Node } from "src/common/models/node.model";
import { Comment } from "src/module/comments/model/comment.model";
import { User } from "src/module/user/model/user.model";
export declare class Feed extends Node {
    title: string;
    content: string;
    user: User;
    userId: string;
    comments: Comment[];
}

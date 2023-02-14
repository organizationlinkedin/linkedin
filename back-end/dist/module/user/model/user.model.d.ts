import { Node } from "src/common/models/node.model";
import { Feed } from "src/module/post/model/post.model";
export declare class User extends Node {
    username: string;
    password: string;
    email: string;
    role: string;
    posts: Feed[];
    comments: Feed[];
}

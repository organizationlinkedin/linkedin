import { Node } from "src/common/models/node.model";
import { Comment } from "src/module/comments/model/comment.model";
import { Feed } from "src/module/post/model/post.model";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class User extends Node {
    @Column({default:""})
    username: string;

    @Column({default:""})
    password: string;
    
    @Column({unique: true})
    email: string

    @Column({nullable: true, default: "user"})
    role: string

    @OneToMany(() => Feed, (post) => post.user)
    posts: Feed[]

    @OneToMany(() => Comment, (comment) => comment.user)
    comments: Feed[]
}
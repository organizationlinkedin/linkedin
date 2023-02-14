import { Node } from "src/common/models/node.model";
import { Feed } from "src/module/post/model/post.model";
import { User } from "src/module/user/model/user.model";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";

@Entity()
export class Comment extends Node {
    @Column({default:""})
    description: string;

    @ManyToOne(() => Feed, (post) => post.comments)
    post: Feed

    @Column({nullable: true})
    postId: string

    @ManyToOne(() => User, (user) => user.comments)
    user: User
    
    @Column({nullable: true})
    userId: string
    
}
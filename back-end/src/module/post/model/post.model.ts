import { Node } from "src/common/models/node.model";
import { Comment } from "src/module/comments/model/comment.model";
import { User } from "src/module/user/model/user.model";
import { Column, Entity, ManyToOne, OneToMany} from "typeorm";

@Entity()
export class Feed extends Node {
    @Column({default:""})
    title: string;

    @Column({default:""})
    content: string;
    
    @ManyToOne(() => User, (user) => user.posts)
    user: User
    
    @Column({nullable: true})
    userId: string

    @OneToMany(() => Comment, (comment) => comment.post)
    comments: Comment[]
    
}
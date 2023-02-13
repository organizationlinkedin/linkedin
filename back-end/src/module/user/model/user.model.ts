import { Node } from "src/common/models/node.model";
import { Column, Entity } from "typeorm";

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
}
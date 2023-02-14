import { PartialType } from "@nestjs/mapped-types";
import { CreateCommentDto } from "./comment-create.dto";

export class UpdateCommentDto extends PartialType (CreateCommentDto) {

}
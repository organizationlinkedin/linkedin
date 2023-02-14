"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCommentDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const comment_create_dto_1 = require("./comment-create.dto");
class UpdateCommentDto extends (0, mapped_types_1.PartialType)(comment_create_dto_1.CreateCommentDto) {
}
exports.UpdateCommentDto = UpdateCommentDto;
//# sourceMappingURL=comment-update.dto.js.map
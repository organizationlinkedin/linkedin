"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePostDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const post_create_dto_1 = require("./post-create.dto");
class UpdatePostDto extends (0, mapped_types_1.PartialType)(post_create_dto_1.CreatePostDto) {
}
exports.UpdatePostDto = UpdatePostDto;
//# sourceMappingURL=post-update.dto.js.map
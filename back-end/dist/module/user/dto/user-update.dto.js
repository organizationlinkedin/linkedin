"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const user_create_dto_1 = require("./user-create.dto");
class UpdateUserDto extends (0, mapped_types_1.PartialType)(user_create_dto_1.CreateUserDto) {
}
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=user-update.dto.js.map
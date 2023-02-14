"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("../user/user.module");
const comment_model_1 = require("./model/comment.model");
const comment_controller_1 = require("./comment.controller");
const comment_service_1 = require("./comment.service");
const post_module_1 = require("../post/post.module");
const post_model_1 = require("../post/model/post.model");
let CommentModule = class CommentModule {
};
CommentModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([comment_model_1.Comment, post_model_1.Feed]), user_module_1.UserModule, post_module_1.PostModule],
        controllers: [comment_controller_1.CommentController],
        providers: [comment_service_1.CommentService],
        exports: [comment_service_1.CommentService]
    })
], CommentModule);
exports.CommentModule = CommentModule;
//# sourceMappingURL=comment.module.js.map
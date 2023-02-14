"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const jwt_authguard_1 = require("../auth/jwt-authguard");
const user_model_1 = require("../user/model/user.model");
const user_decorator_1 = require("../user/user.decorator");
const post_create_dto_1 = require("./dto/post-create.dto");
const post_update_dto_1 = require("./dto/post-update.dto");
const post_service_1 = require("./post.service");
let PostController = class PostController {
    constructor(_postService) {
        this._postService = _postService;
    }
    async addPost(createPostDto, user) {
        return await this._postService.addPost(createPostDto, user);
    }
    async delete(id) {
        return await this._postService.deletePost(id);
    }
    async update(id, updatePostDto) {
        return await this._postService.updatePost(id, updatePostDto);
    }
    async getAllPosts() {
        return await this._postService.getAllPosts();
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_authguard_1.JwtAuthGuard),
    (0, common_1.Post)('add-post'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_create_dto_1.CreatePostDto, user_model_1.User]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "addPost", null);
__decorate([
    (0, common_1.UseGuards)(jwt_authguard_1.JwtAuthGuard),
    (0, common_1.Delete)('delete-post/:id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "delete", null);
__decorate([
    (0, common_1.UseGuards)(jwt_authguard_1.JwtAuthGuard),
    (0, common_1.Put)('update-post/:id'),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, post_update_dto_1.UpdatePostDto]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('get-all-posts'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getAllPosts", null);
PostController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map
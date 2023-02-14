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
exports.CommentController = void 0;
const common_1 = require("@nestjs/common");
const jwt_authguard_1 = require("../auth/jwt-authguard");
const user_model_1 = require("../user/model/user.model");
const user_decorator_1 = require("../user/user.decorator");
const comment_create_dto_1 = require("./dto/comment-create.dto");
const comment_service_1 = require("./comment.service");
let CommentController = class CommentController {
    constructor(_commentService) {
        this._commentService = _commentService;
    }
    async createComment(id, createCommentDto, user) {
        return await this._commentService.addComment(id, createCommentDto, user);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_authguard_1.JwtAuthGuard),
    (0, common_1.Post)('post/:id'),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, comment_create_dto_1.CreateCommentDto, user_model_1.User]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "createComment", null);
CommentController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [comment_service_1.CommentService])
], CommentController);
exports.CommentController = CommentController;
//# sourceMappingURL=comment.controller.js.map
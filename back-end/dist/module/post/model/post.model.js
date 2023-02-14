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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feed = void 0;
const node_model_1 = require("../../../common/models/node.model");
const comment_model_1 = require("../../comments/model/comment.model");
const user_model_1 = require("../../user/model/user.model");
const typeorm_1 = require("typeorm");
let Feed = class Feed extends node_model_1.Node {
};
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], Feed.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    __metadata("design:type", String)
], Feed.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_model_1.User, (user) => user.posts),
    __metadata("design:type", user_model_1.User)
], Feed.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Feed.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_model_1.Comment, (comment) => comment.post),
    __metadata("design:type", Array)
], Feed.prototype, "comments", void 0);
Feed = __decorate([
    (0, typeorm_1.Entity)()
], Feed);
exports.Feed = Feed;
//# sourceMappingURL=post.model.js.map
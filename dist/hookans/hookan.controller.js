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
exports.HookanController = void 0;
const common_1 = require("@nestjs/common");
const hookan_service_1 = require("./hookan.service");
const create_hookan_dto_1 = require("./dto/create-hookan.dto");
const update_hookan_dto_1 = require("./dto/update-hookan.dto");
let HookanController = class HookanController {
    constructor(hookanService) {
        this.hookanService = hookanService;
    }
    getAll() {
        console.log('getAll');
        return this.hookanService.getAll();
    }
    getById(id) {
        console.log('getID');
        return this.hookanService.getById(id);
    }
    update(hookanDto) {
        return this.hookanService.update(hookanDto);
    }
    async create(hookanDto) {
        return await this.hookanService.create(hookanDto);
    }
    async delete(id) {
        return this.hookanService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HookanController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HookanController.prototype, "getById", null);
__decorate([
    (0, common_1.Put)('/update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_hookan_dto_1.UpdateHookanDto]),
    __metadata("design:returntype", void 0)
], HookanController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_hookan_dto_1.CreateHookanDto]),
    __metadata("design:returntype", Promise)
], HookanController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HookanController.prototype, "delete", null);
HookanController = __decorate([
    (0, common_1.Controller)('hookans'),
    __metadata("design:paramtypes", [hookan_service_1.HookanService])
], HookanController);
exports.HookanController = HookanController;
//# sourceMappingURL=hookan.controller.js.map
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
exports.HookanService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const hookan_model_1 = require("./hookan.model");
let HookanService = class HookanService {
    constructor(hookanRepository) {
        this.hookanRepository = hookanRepository;
    }
    async getAll() {
        return await this.hookanRepository.findAll();
    }
    async getById(id) {
        const candidate = await this.hookanRepository.findOne({ where: { id }, include: { all: true } });
        if (candidate) {
            return candidate;
        }
        else {
            throw new common_1.UnauthorizedException({ message: 'Кальянная не найдена!' });
        }
    }
    async create(hookanDto) {
        return await this.hookanRepository.create(hookanDto);
    }
    async update(hookanDto) {
        await this.hookanRepository.update(hookanDto, { where: { id: hookanDto.id } });
        return await this.getById(hookanDto.id);
    }
    async delete(id) {
        await this.hookanRepository.destroy({ where: { id } });
    }
};
HookanService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(hookan_model_1.Hookan)),
    __metadata("design:paramtypes", [Object])
], HookanService);
exports.HookanService = HookanService;
//# sourceMappingURL=hookan.service.js.map
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
exports.PlacesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const place_model_1 = require("./place.model");
let PlacesService = class PlacesService {
    constructor(placeRepository) {
        this.placeRepository = placeRepository;
    }
    async getAll() {
        return await this.placeRepository.findAll();
    }
    async getByHookan(hookanId) {
        const candidate = await this.placeRepository.findAll({ where: { hookanId }, include: { all: true } });
        if (candidate) {
            return candidate;
        }
        else {
            throw new common_1.UnauthorizedException({ message: 'Место не найдено!' });
        }
    }
    async getById(id) {
        const candidate = await this.placeRepository.findOne({ where: { id }, include: { all: true } });
        if (candidate) {
            return candidate;
        }
        else {
            throw new common_1.UnauthorizedException({ message: 'Место не найдено!' });
        }
    }
    async create(placeDto) {
        return await this.placeRepository.create(placeDto);
    }
    async update(placeDto) {
        await this.placeRepository.update(placeDto, { where: { id: placeDto.id } });
        return await this.getById(placeDto.id);
    }
    async delete(id) {
        await this.placeRepository.destroy({ where: { id } });
    }
};
PlacesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(place_model_1.Place)),
    __metadata("design:paramtypes", [Object])
], PlacesService);
exports.PlacesService = PlacesService;
//# sourceMappingURL=places.service.js.map
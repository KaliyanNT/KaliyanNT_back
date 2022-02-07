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
exports.PlacesController = void 0;
const common_1 = require("@nestjs/common");
const update_place_dto_1 = require("./dto/update-place.dto");
const create_place_dto_1 = require("./dto/create-place.dto");
const places_service_1 = require("./places.service");
let PlacesController = class PlacesController {
    constructor(placeService) {
        this.placeService = placeService;
    }
    getAll() {
        return this.placeService.getAll();
    }
    getAllByHookan(id) {
        return this.placeService.getByHookan(id);
    }
    getById(id) {
        return this.placeService.getById(id);
    }
    update(placeDto) {
        return this.placeService.update(placeDto);
    }
    async create(placeDto) {
        return await this.placeService.create(placeDto);
    }
    async delete(id) {
        return this.placeService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlacesController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/hookan/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlacesController.prototype, "getAllByHookan", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlacesController.prototype, "getById", null);
__decorate([
    (0, common_1.Put)('/update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_place_dto_1.UpdatePlaceDto]),
    __metadata("design:returntype", void 0)
], PlacesController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_place_dto_1.CreatePlaceDto]),
    __metadata("design:returntype", Promise)
], PlacesController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PlacesController.prototype, "delete", null);
PlacesController = __decorate([
    (0, common_1.Controller)('places'),
    __metadata("design:paramtypes", [places_service_1.PlacesService])
], PlacesController);
exports.PlacesController = PlacesController;
//# sourceMappingURL=places.controller.js.map
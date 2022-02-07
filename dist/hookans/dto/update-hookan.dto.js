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
exports.UpdateHookanDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class UpdateHookanDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Id пользователя' }),
    __metadata("design:type", Number)
], UpdateHookanDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Мята', description: 'Название кальянной' }),
    __metadata("design:type", String)
], UpdateHookanDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Кальянная «Мята» — это уникальная, расслабляющая атмосфера, большой выбор коктейлей и авторских чаев.',
        description: 'Описание кальянной'
    }),
    __metadata("design:type", String)
], UpdateHookanDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Черноисточинское Шоссе 63б', description: 'Адрес кальянной' }),
    __metadata("design:type", String)
], UpdateHookanDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: +79002133434, description: 'Контактный телефон кальянной' }),
    __metadata("design:type", String)
], UpdateHookanDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '57.86779774574026, 59.943858876465605',
        description: 'Координаты кальянной (из GoogleMaps'
    }),
    __metadata("design:type", String)
], UpdateHookanDto.prototype, "coordinates", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '16:00-02:00', description: 'Рабочие часы' }),
    __metadata("design:type", Object)
], UpdateHookanDto.prototype, "workingHour", void 0);
exports.UpdateHookanDto = UpdateHookanDto;
//# sourceMappingURL=update-hookan.dto.js.map
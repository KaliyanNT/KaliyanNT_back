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
exports.Place = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const hookan_model_1 = require("../hookans/hookan.model");
const booking_model_1 = require("../booking/booking.model");
let Place = class Place extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 9999, description: 'Уникальный идентификатор' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], Place.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Столик №1', description: 'Название места' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Place.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Игровая', description: 'Тип места' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Place.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 600, description: 'Максимальное количество человек за столиком' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", Number)
], Place.prototype, "maxPerson", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => hookan_model_1.Hookan),
    __metadata("design:type", hookan_model_1.Hookan)
], Place.prototype, "hookan", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => hookan_model_1.Hookan),
    __metadata("design:type", hookan_model_1.Hookan)
], Place.prototype, "hookanId", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => booking_model_1.Booking),
    __metadata("design:type", booking_model_1.Booking)
], Place.prototype, "bookings", void 0);
Place = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'places' })
], Place);
exports.Place = Place;
//# sourceMappingURL=place.model.js.map
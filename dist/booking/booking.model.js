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
exports.Booking = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const place_model_1 = require("../places/place.model");
const customer_model_1 = require("../customers/customer.model");
const hookan_model_1 = require("../hookans/hookan.model");
let Booking = class Booking extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 9999, description: 'Уникальный идентификатор' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], Booking.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: +79002133434, description: 'Контактный телефон кальянной' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Booking.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 600, description: 'Начальная цена кальяна' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Booking.prototype, "startTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: +79002133434, description: 'Контактный телефон кальянной' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Booking.prototype, "endTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: +79002133434, description: 'Контактный телефон кальянной' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Booking.prototype, "confirm", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: +79002133434, description: 'Контактный телефон кальянной' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Booking.prototype, "confirmAdminId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: +79002133434, description: 'Контактный телефон кальянной' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Booking.prototype, "noteToAdmin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: +79002133434, description: 'Контактный телефон кальянной' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Booking.prototype, "noteToUser", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => place_model_1.Place),
    __metadata("design:type", place_model_1.Place)
], Booking.prototype, "place", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => place_model_1.Place),
    __metadata("design:type", place_model_1.Place)
], Booking.prototype, "placeId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => hookan_model_1.Hookan),
    __metadata("design:type", hookan_model_1.Hookan)
], Booking.prototype, "hookan", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => hookan_model_1.Hookan),
    __metadata("design:type", hookan_model_1.Hookan)
], Booking.prototype, "hookanId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => customer_model_1.Customer),
    __metadata("design:type", customer_model_1.Customer)
], Booking.prototype, "customer", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => customer_model_1.Customer),
    __metadata("design:type", customer_model_1.Customer)
], Booking.prototype, "customerId", void 0);
Booking = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'bookings' })
], Booking);
exports.Booking = Booking;
//# sourceMappingURL=booking.model.js.map
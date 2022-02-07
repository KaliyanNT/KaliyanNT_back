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
exports.Hookan = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const place_model_1 = require("../places/place.model");
const user_model_1 = require("../users/user.model");
const booking_model_1 = require("../booking/booking.model");
let Hookan = class Hookan extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 9999, description: 'Уникальный идентификатор' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], Hookan.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Мята', description: 'Название кальянной' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Hookan.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Кальянная «Мята» — это уникальная, расслабляющая атмосфера, большой выбор коктейлей и авторских чаев.',
        description: 'Описание кальянной'
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: true, defaultValue: '' }),
    __metadata("design:type", String)
], Hookan.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Черноисточинское Шоссе 63б', description: 'Адрес кальянной' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: true, defaultValue: '' }),
    __metadata("design:type", String)
], Hookan.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: +79002133434, description: 'Контактный телефон кальянной' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: true, defaultValue: '' }),
    __metadata("design:type", String)
], Hookan.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '57.86779774574026, 59.943858876465605',
        description: 'Координаты кальянной (из GoogleMaps'
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: true, defaultValue: '' }),
    __metadata("design:type", String)
], Hookan.prototype, "coordinates", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '16:00-02:00', description: 'Рабочие часы' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.JSON }),
    __metadata("design:type", Object)
], Hookan.prototype, "workingHour", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => place_model_1.Place),
    __metadata("design:type", place_model_1.Place)
], Hookan.prototype, "places", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Hookan.prototype, "users", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => booking_model_1.Booking),
    __metadata("design:type", booking_model_1.Booking)
], Hookan.prototype, "bookings", void 0);
Hookan = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'hookans' })
], Hookan);
exports.Hookan = Hookan;
//# sourceMappingURL=hookan.model.js.map
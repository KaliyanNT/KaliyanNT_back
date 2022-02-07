"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlacesModule = void 0;
const common_1 = require("@nestjs/common");
const places_controller_1 = require("./places.controller");
const places_service_1 = require("./places.service");
const sequelize_1 = require("@nestjs/sequelize");
const place_model_1 = require("./place.model");
let PlacesModule = class PlacesModule {
};
PlacesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([place_model_1.Place])
        ],
        controllers: [places_controller_1.PlacesController],
        providers: [places_service_1.PlacesService],
        exports: [places_service_1.PlacesService]
    })
], PlacesModule);
exports.PlacesModule = PlacesModule;
//# sourceMappingURL=places.module.js.map
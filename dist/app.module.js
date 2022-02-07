"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const hookan_module_1 = require("./hookans/hookan.module");
const users_module_1 = require("./users/users.module");
const places_module_1 = require("./places/places.module");
const booking_module_1 = require("./booking/booking.module");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const user_model_1 = require("./users/user.model");
const hookan_model_1 = require("./hookans/hookan.model");
const place_model_1 = require("./places/place.model");
const booking_model_1 = require("./booking/booking.model");
const customers_module_1 = require("./customers/customers.module");
const customer_model_1 = require("./customers/customer.model");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `.env`,
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'mysql',
                host: process.env.MYSQL_HOST,
                port: Number(process.env.MYSQL_PORT),
                username: process.env.MYSQL_USER,
                password: process.env.MYSQL_PASSWORD,
                database: process.env.MYSQL_DB,
                models: [user_model_1.User, hookan_model_1.Hookan, place_model_1.Place, booking_model_1.Booking, customer_model_1.Customer],
                autoLoadModels: true
            }),
            hookan_module_1.HookanModule,
            users_module_1.UsersModule,
            places_module_1.PlacesModule,
            booking_module_1.BookingModule,
            customers_module_1.CustomersModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
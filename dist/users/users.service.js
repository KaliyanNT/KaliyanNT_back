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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_model_1 = require("./user.model");
const sequelize_1 = require("@nestjs/sequelize");
const jwt_1 = require("@nestjs/jwt");
let UsersService = class UsersService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async getAllUsers() {
        return await this.userRepository.findAll();
    }
    async getUsersByHookan(hookanId) {
        return await this.userRepository.findAll({ where: { hookanId } });
    }
    async getById(id) {
        const candidate = await this.userRepository.findOne({ where: { id }, include: { all: true } });
        if (candidate) {
            return candidate;
        }
        else {
            throw new common_1.UnauthorizedException({ message: 'Пользователь не найден!' });
        }
    }
    async updateUser(userDto) {
        await this.userRepository.update(userDto, { where: { id: userDto.id } });
        return await this.getById(userDto.id);
    }
    async login(userDto) {
        const candidate = await this.getUserByLogin(userDto.login);
        if (candidate) {
            if (candidate.password === userDto.password) {
                return this.generateToken(candidate);
            }
            else {
                throw new common_1.UnauthorizedException({ message: 'Некорректный пароль!' });
            }
        }
        else {
            throw new common_1.UnauthorizedException({ message: 'Пользователя с таким логином не существует!' });
        }
    }
    async registration(userDto) {
        const candidate = await this.getUserByLogin(userDto.login);
        if (candidate) {
            throw new common_1.UnauthorizedException({ message: 'Логин занят!' });
        }
        else {
            return await this.userRepository.create(userDto);
        }
    }
    async deleteUser(id) {
        return await this.userRepository.destroy({ where: { id } });
    }
    async generateToken(user) {
        const payload = { email: user.login, id: user.id };
        return {
            user: user,
            token: this.jwtService.sign(payload)
        };
    }
    verifyToken(token) {
        try {
            let verify = this.jwtService.verify(token);
            if (verify)
                return true;
        }
        catch (e) {
            console.log(e);
            throw new common_1.HttpException('Данный токен не существует. Или истек.', common_1.HttpStatus.UNAUTHORIZED);
        }
    }
    async getUserByLogin(login) {
        return await this.userRepository.findOne({ where: { login }, include: { all: true } });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map
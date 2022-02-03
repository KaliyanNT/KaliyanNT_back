import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common'
import { User }                                                         from './user.model'
import { InjectModel }                       from "@nestjs/sequelize";
import { CreateUserDto }                     from "./dto/create-user.dto";
import { LoginUserDto }                      from "./dto/login-user.dto";
import { JwtService }                        from '@nestjs/jwt'


@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User,
                private jwtService: JwtService) {
    }

    async getAllUsers() {
        return await this.userRepository.findAll()
    }

    async getUsersByHookan(hookanId) {
        return await this.userRepository.findAll({where: {hookanId}})
    }

    async getById(id) {
        const candidate = await this.userRepository.findOne({where: {id}, include: {all: true}});
        if (candidate) {
            return candidate
        } else {
            throw new UnauthorizedException({message: 'Пользователь не найден!'})
        }
    }

    async updateUser(userDto) {
        await this.userRepository.update(userDto, {where: {id: userDto.id}})
        return await this.getById(userDto.id)
    }

    async login(userDto: LoginUserDto) {
        const candidate = await this.getUserByLogin(userDto.login)

        if (candidate) {
            if (candidate.password === userDto.password) {
                return this.generateToken(candidate)
            } else {
                throw new UnauthorizedException({message: 'Некорректный пароль!'})
            }
        } else {
            throw new UnauthorizedException({message: 'Пользователя с таким логином не существует!'})
        }
    }

    async registration(userDto: CreateUserDto) {
        const candidate = await this.getUserByLogin(userDto.login);
        if (candidate) {
            throw new UnauthorizedException({message: 'Логин занят!'})
        } else {
            return await this.userRepository.create(userDto)
        }
    }

    async deleteUser(id) {
        return await this.userRepository.destroy({where: {id}});
    }


    private async generateToken(user: User) {
        const payload = {email: user.login, id: user.id }
        return {
            user: user,
            token: this.jwtService.sign(payload)
        }
    }

    verifyToken(token : string) {
        try {
            let verify = this.jwtService.verify(token)
            if(verify) return true
        }
        catch (e) {
            console.log(e)
            throw new HttpException('Данный токен не существует. Или истек.', HttpStatus.UNAUTHORIZED);
        }
    }

    private async getUserByLogin(login) {
        return await this.userRepository.findOne({where: {login}, include: {all: true}});
    }

}

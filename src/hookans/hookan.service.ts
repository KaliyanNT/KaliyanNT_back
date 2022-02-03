import { Injectable, UnauthorizedException } from '@nestjs/common'
import { InjectModel }                       from '@nestjs/sequelize'
import { Hookan }                            from './hookan.model'
import { CreateHookanDto }                   from './dto/create-hookan.dto'
import { UpdateHookanDto }                   from './dto/update-hookan.dto'


@Injectable()
export class HookanService {
    constructor(@InjectModel(Hookan) private hookanRepository: typeof Hookan) {
    }

    async getAll() {
        return await this.hookanRepository.findAll()
    }

    async getById(id) {
        const candidate = await this.hookanRepository.findOne({ where: { id }, include: { all: true } })
        if (candidate) {
            return candidate
        } else {
            throw new UnauthorizedException({ message: 'Кальянная не найдена!' })
        }
    }

    async create(hookanDto: CreateHookanDto) {
        return await this.hookanRepository.create(hookanDto)
    }

    async update(hookanDto: UpdateHookanDto) {
        await this.hookanRepository.update(hookanDto, { where: { id: hookanDto.id } })
        return await this.getById(hookanDto.id)
    }

    async delete(id) {
        await this.hookanRepository.destroy({where: {id}});
    }
}

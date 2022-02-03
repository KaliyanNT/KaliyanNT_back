import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UpdatePlaceDto }                    from './dto/update-place.dto'
import { CreatePlaceDto }                    from './dto/create-place.dto'
import { InjectModel }                       from '@nestjs/sequelize'
import { Place }                             from './place.model'


@Injectable()
export class PlacesService {
  constructor(@InjectModel(Place) private placeRepository: typeof Place) {
  }


  async getAll() {
    return await this.placeRepository.findAll()
  }

  async getByHookan(hookanId) {
    const candidate = await this.placeRepository.findAll({ where: { hookanId }, include: { all: true } })
    if (candidate) {
      return candidate
    } else {
      throw new UnauthorizedException({ message: 'Место не найдено!' })
    }
  }

  async getById(id) {
    const candidate = await this.placeRepository.findOne({ where: { id }, include: { all: true } })
    if (candidate) {
      return candidate
    } else {
      throw new UnauthorizedException({ message: 'Место не найдено!' })
    }
  }

  async create(placeDto: CreatePlaceDto) {
    return await this.placeRepository.create(placeDto)
  }

  async update(placeDto: UpdatePlaceDto) {
    await this.placeRepository.update(placeDto, { where: { id: placeDto.id } })
    return await this.getById(placeDto.id)
  }

  async delete(id) {
    await this.placeRepository.destroy({where: {id}});
  }


}

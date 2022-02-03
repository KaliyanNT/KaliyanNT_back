import { Injectable, UnauthorizedException } from '@nestjs/common'
import { InjectModel }                       from '@nestjs/sequelize'
import { Booking }                           from './booking.model'
import { CreateBookingDto }                  from './dto/create-booking.dto'
import { UpdateBookingDto }                  from './dto/update-booking.dto'


@Injectable()
export class BookingService {
  constructor(@InjectModel(Booking) private bookingRepository: typeof Booking) {
  }


  async getAll() {
    return await this.bookingRepository.findAll()
  }


  async getById(id) {
    const candidate = await this.bookingRepository.findOne({ where: { id }, include: { all: true } })
    if (candidate) {
      return candidate
    } else {
      throw new UnauthorizedException({ message: 'Кальянная не найдена!' })
    }
  }


  async create(bookingDto: CreateBookingDto) {
    return await this.bookingRepository.create(bookingDto)
  }


  async update(bookingDto: UpdateBookingDto) {
    await this.bookingRepository.update(bookingDto, { where: { id: bookingDto.id } })
    return await this.getById(bookingDto.id)
  }


  async delete(id) {
    await this.bookingRepository.destroy({ where: { id } })
  }
}

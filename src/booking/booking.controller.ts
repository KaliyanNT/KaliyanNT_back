import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { BookingService }                          from './booking.service'
import { CreateBookingDto }                        from './dto/create-booking.dto'
import { UpdateBookingDto }                        from './dto/update-booking.dto'


@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {
  }


  @Get()
  getAll() {
    return this.bookingService.getAll()
  }


  @Get(':id')
  getById(@Param('id') id: string) {
    return this.bookingService.getById(id)
  }


  @Put('/update')
  update(@Body() bookingDto: UpdateBookingDto) {
    return this.bookingService.update(bookingDto)
  }


  @Post('/create')
  async create(@Body() bookingDto: CreateBookingDto) {
    return await this.bookingService.create(bookingDto)
  }
}

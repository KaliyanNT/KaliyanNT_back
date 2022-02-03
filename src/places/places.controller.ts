import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { UpdatePlaceDto }                                  from './dto/update-place.dto'
import { CreatePlaceDto }                             from './dto/create-place.dto'
import { PlacesService }                              from './places.service'


@Controller('places')
export class PlacesController {
  constructor(private readonly placeService: PlacesService) {
  }


  @Get()
  getAll() {
    return this.placeService.getAll()
  }

  @Get('/hookan/:id')
  getAllByHookan(@Param('id') id: string) {
    return this.placeService.getByHookan(id)
  }


  @Get(':id')
  getById(@Param('id') id: string) {
    return this.placeService.getById(id)
  }


  @Put('/update')
  update(@Body() placeDto: UpdatePlaceDto) {
    return this.placeService.update(placeDto)
  }


  @Post('/create')
  async create(@Body() placeDto: CreatePlaceDto) {
    return await this.placeService.create(placeDto)
  }


  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.placeService.delete(id)
  }
}

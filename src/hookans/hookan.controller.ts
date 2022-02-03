import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { HookanService }                                   from './hookan.service'
import { CreateHookanDto }        from './dto/create-hookan.dto'
import { UpdateHookanDto }        from './dto/update-hookan.dto'


@Controller('hookans')
export class HookanController {
    constructor(private readonly hookanService: HookanService) {
    }

    @Get()
    getAll() {
        console.log('getAll')
        return this.hookanService.getAll()
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        console.log('getID')
        return this.hookanService.getById(id)
    }

    @Put('/update')
    update(@Body() hookanDto: UpdateHookanDto) {
        return this.hookanService.update(hookanDto)
    }


    @Post('/create')
    async create(@Body() hookanDto: CreateHookanDto) {
        return await this.hookanService.create(hookanDto)
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.hookanService.delete(id)
    }
}

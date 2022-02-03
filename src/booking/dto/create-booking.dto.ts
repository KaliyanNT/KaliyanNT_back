import { ApiProperty } from '@nestjs/swagger'


export class CreateBookingDto {

    @ApiProperty({ example: 'Мята', description: 'Название кальянной' })
    readonly date: string

    @ApiProperty({ example: 'Черноисточинское Шоссе 63б', description: 'Адрес кальянной' })
    readonly startTime: string

    @ApiProperty({ example: 'Черноисточинское Шоссе 63б', description: 'Адрес кальянной' })
    readonly endTime: string

    @ApiProperty({ example: 'Черноисточинское Шоссе 63б', description: 'Адрес кальянной' })
    readonly noteToAdmin: string

}

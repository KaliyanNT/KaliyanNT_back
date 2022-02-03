import { ApiProperty } from '@nestjs/swagger'


export class CreateCustomerDto {

    @ApiProperty({ example: 'Мята', description: 'Название кальянной' })
    readonly chatId: number

    @ApiProperty({ example: 'Черноисточинское Шоссе 63б', description: 'Адрес кальянной' })
    readonly first_name: string

    @ApiProperty({ example: 'Черноисточинское Шоссе 63б', description: 'Адрес кальянной' })
    readonly username: string

}

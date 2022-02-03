import { ApiProperty } from '@nestjs/swagger'


export class CreatePlaceDto {

    @ApiProperty({ example: '1', description: 'Id пользователя' })
    readonly id: number

    @ApiProperty({ example: 'Стол №1', description: 'Название кальянной' })
    readonly name: string

    @ApiProperty({ example: 'Игровая', description: 'Описание кальянной' })
    readonly type: string

    @ApiProperty({ example: 6, description: 'Адрес кальянной' })
    readonly maxPerson: number
    //
    // @ApiProperty({ example: 6, description: 'Id кальянной' })
    // readonly hookanId: number


}


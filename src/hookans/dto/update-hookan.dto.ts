import { ApiProperty } from '@nestjs/swagger'


export class UpdateHookanDto {

    @ApiProperty({ example: '1', description: 'Id пользователя' })
    readonly id: number

    @ApiProperty({ example: 'Мята', description: 'Название кальянной' })
    readonly name: string

    @ApiProperty({
        example: 'Кальянная «Мята» — это уникальная, расслабляющая атмосфера, большой выбор коктейлей и авторских чаев.',
        description: 'Описание кальянной'
    })
    readonly description: string

    @ApiProperty({ example: 'Черноисточинское Шоссе 63б', description: 'Адрес кальянной' })
    readonly address: string

    @ApiProperty({ example: +79002133434, description: 'Контактный телефон кальянной' })
    readonly phone: string

    @ApiProperty({
        example:     '57.86779774574026, 59.943858876465605',
        description: 'Координаты кальянной (из GoogleMaps'
    })
    readonly coordinates: string

    @ApiProperty({ example: '16:00-02:00', description: 'Рабочие часы' })
    readonly workingHour: Object

}

import { ApiProperty } from '@nestjs/swagger'


export class UpdateBookingDto {

    @ApiProperty({ example: 'Мята', description: 'Название кальянной' })
    readonly id: number

    @ApiProperty({ example: 'Мята', description: 'Название кальянной' })
    readonly confirm: string

    @ApiProperty({ example: 'Мята', description: 'Название кальянной' })
    readonly noteToUser: string

    @ApiProperty({ example: 'Мята', description: 'Название кальянной' })
    readonly confirmAdminId: number




}

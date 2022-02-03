import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { Place } from "../places/place.model";
import { Customer } from "../customers/customer.model";

@Table({tableName: 'bookings'})
export class Booking extends Model<Booking> {
    @ApiProperty({example: 9999, description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty({example: +79002133434, description: 'Контактный телефон кальянной'})
    @Column({type: DataType.STRING})
    date: string

    @ApiProperty({example: 600, description: 'Начальная цена кальяна'})
    @Column({type: DataType.STRING})
    startTime: string

    @ApiProperty({example: +79002133434, description: 'Контактный телефон кальянной'})
    @Column({type: DataType.STRING})
    endTime: string

    @ApiProperty({example: +79002133434, description: 'Контактный телефон кальянной'})
    @Column({type: DataType.STRING})
    confirm: string

    @ApiProperty({example: +79002133434, description: 'Контактный телефон кальянной'})
    @Column({type: DataType.INTEGER})
    confirmAdminId: number

    @ApiProperty({example: +79002133434, description: 'Контактный телефон кальянной'})
    @Column({type: DataType.STRING})
    noteToAdmin: string

    @ApiProperty({example: +79002133434, description: 'Контактный телефон кальянной'})
    @Column({type: DataType.STRING})
    noteToUser: string

    @BelongsTo(() => Place)
    place: Place;
    @ForeignKey(() => Place)
    placeId: Place

    @BelongsTo(() => Customer)
    customer: Customer;
    @ForeignKey(() => Customer)
    customerId: Customer

}

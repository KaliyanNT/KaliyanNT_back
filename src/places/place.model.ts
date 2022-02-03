import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { Hookan } from 'src/hookans/hookan.model'
import { Booking } from "../booking/booking.model";


@Table({tableName: 'places'})
export class Place extends Model<Place> {
    @ApiProperty({example: 9999, description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty({example: 'Столик №1', description: 'Название места'})
    @Column({type: DataType.STRING, allowNull: false})
    name: string

    @ApiProperty({example: 'Игровая', description: 'Тип места'})
    @Column({type: DataType.STRING, allowNull: false})
    type: string

    @ApiProperty({example: 600, description: 'Максимальное количество человек за столиком'})
    @Column({type: DataType.STRING, allowNull: false})
    maxPerson: number

    @BelongsTo(() => Hookan)
    hookan: Hookan;
    @ForeignKey(() => Hookan)
    hookanId: Hookan

    @HasMany(() => Booking)
    bookings: Booking

}

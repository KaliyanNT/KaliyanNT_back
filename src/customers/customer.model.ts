import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { Booking } from "../booking/booking.model";


@Table({tableName: 'customers'})
export class Customer extends Model<Customer> {
    @ApiProperty({example: 9999, description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty({example: 940557402, description: 'Id чата в телеграме'})
    @Column({type: DataType.INTEGER, unique: true, allowNull: false})
    chatId: number;

    @ApiProperty({example: 'Кирилл', description: 'Имя пользователя'})
    @Column({type: DataType.STRING, allowNull: false})
    first_name: string;

    @ApiProperty({example: 'merkulovka', description: 'Логин пользователя (уникальный)'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    username: string;

    @HasMany(() => Booking)
    bookings: Booking
}

import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript'
import { ApiProperty }                             from '@nestjs/swagger'
import { Place }                                   from 'src/places/place.model'
import { User }                                    from '../users/user.model'
import { Booking }                                 from '../booking/booking.model'


@Table({ tableName: 'hookans' })
export class Hookan extends Model<Hookan> {
    @ApiProperty({ example: 9999, description: 'Уникальный идентификатор' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number

    @ApiProperty({ example: 'Мята', description: 'Название кальянной' })
    @Column({ type: DataType.STRING, allowNull: false })
    name: string

    @ApiProperty({
        example:     'Кальянная «Мята» — это уникальная, расслабляющая атмосфера, большой выбор коктейлей и авторских чаев.',
        description: 'Описание кальянной'
    })
    @Column({ type: DataType.STRING, allowNull: true, defaultValue: '' })
    description: string

    @ApiProperty({ example: 'Черноисточинское Шоссе 63б', description: 'Адрес кальянной' })
    @Column({ type: DataType.STRING, allowNull: true, defaultValue: '' })
    address: string

    @ApiProperty({ example: +79002133434, description: 'Контактный телефон кальянной' })
    @Column({ type: DataType.STRING, allowNull: true, defaultValue: '' })
    phone: string

    @ApiProperty({
        example:     '57.86779774574026, 59.943858876465605',
        description: 'Координаты кальянной (из GoogleMaps'
    })
    @Column({ type: DataType.STRING, allowNull: true, defaultValue: '' })
    coordinates: string

    @ApiProperty({ example: '16:00-02:00', description: 'Рабочие часы' })
    @Column({ type: DataType.JSON })
    workingHour: Object

    @HasMany(() => Place)
    places: Place

    @HasMany(() => User)
    users: User

    @HasMany(() => Booking)
    bookings: Booking


}

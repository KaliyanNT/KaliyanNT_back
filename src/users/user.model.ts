import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { Place } from "../places/place.model";
import { Hookan } from "../hookans/hookan.model";


@Table({tableName: 'users'})
export class User extends Model<User> {
    @ApiProperty({example: 9999, description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty({example: 'Кирилл', description: 'Имя пользователя'})
    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @ApiProperty({example: 'merkulovka', description: 'Логин пользователя (уникальный)'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    login: string;

    @ApiProperty({example: 'qwerty', description: 'Пароль'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'manager', description: 'Роль пользователя'})
    @Column({type: DataType.STRING, allowNull: false})
    role: string;

    @ApiProperty({example: 940557402, description: 'Id чата в телеграме'})
    @Column({type: DataType.INTEGER, unique: true, allowNull: false})
    chatId: number;

    @BelongsTo(() => Hookan)
    hookan: Hookan;
    @ForeignKey(() => Hookan)
    hookanId: Hookan

}

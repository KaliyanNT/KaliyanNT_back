import { ApiProperty }               from "@nestjs/swagger";
import { Hookan } from "../../hookans/hookan.model";

export class CreateUserDto {

    @ApiProperty({example: 'Кирилл', description: 'Имя пользователя'})
    readonly name : string;

    @ApiProperty({example: 'merkulovka', description: 'Логин пользователя (уникальный)'})
    readonly login : string;

    @ApiProperty({example: 'qwerty', description: 'Пароль'})
    readonly password : string;

    @ApiProperty({example: 'manager', description: 'Роль пользователя'})
    readonly role : string;

    @ApiProperty({example: 940557402, description: 'Id чата в телеграме'})
    readonly chatId : number;

    // @ApiProperty({example: 1, description: 'Id кальянной'})
    // readonly hookanId : Hookan;
}

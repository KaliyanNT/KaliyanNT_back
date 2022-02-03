import { ApiProperty }               from "@nestjs/swagger";
import { Hookan } from "../../hookans/hookan.model";

export class LoginUserDto {

    @ApiProperty({example: 'merkulovka', description: 'Логин пользователя (уникальный)'})
    readonly login : string;

    @ApiProperty({example: 'qwerty', description: 'Пароль'})
    readonly password : string;

}

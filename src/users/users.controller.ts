import { Body, Controller, Delete, Get, Param, Post, Headers } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from "./dto/create-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";


@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {
    }

    @Get()
    getAll() {
        return this.userService.getAllUsers()
    }

    @Get('id/:id')
    getById(@Param('id') id: string) {
        console.log(`id.replace(/\D/g, '')`)
        console.log(id.replace(/\D/g, ''))
        return this.userService.getById(id.replace(/\D/g, ''))
    }

    @Get('/hookan/:id')
    getUsersByHookan(@Param('id') hookanId: string) {
        console.log(hookanId)
        return this.userService.getUsersByHookan(hookanId)
    }

    @Post('/update')
    update(@Body() userDto: UpdateUserDto) {
        return this.userService.updateUser(userDto)
    }

    @Post('/login')
    login(@Body() userDto: LoginUserDto) {
        return this.userService.login(userDto)
    }

    @Post('/registration')
    registration(@Body() userDto: CreateUserDto) {
        return this.userService.registration(userDto)
    }

    @Delete(':id')
    detele(@Param('id') id: string) {
        console.log(id.replace(/\D/g, ''))
        return this.userService.deleteUser(id.replace(/\D/g, ''))
    }


    @Get('/check')
    checkToken(@Headers() headers) {
        return this.userService.verifyToken(headers.token)
    }

}

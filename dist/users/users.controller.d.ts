import { UsersService } from './users.service';
import { CreateUserDto } from "./dto/create-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getAll(): Promise<import("./user.model").User[]>;
    getById(id: string): Promise<import("./user.model").User>;
    getUsersByHookan(hookanId: string): Promise<import("./user.model").User[]>;
    update(userDto: UpdateUserDto): Promise<import("./user.model").User>;
    login(userDto: LoginUserDto): Promise<{
        user: import("./user.model").User;
        token: string;
    }>;
    registration(userDto: CreateUserDto): Promise<import("./user.model").User>;
    detele(id: string): Promise<number>;
    checkToken(headers: any): boolean;
}

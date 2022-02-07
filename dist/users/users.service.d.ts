import { User } from './user.model';
import { CreateUserDto } from "./dto/create-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";
import { JwtService } from '@nestjs/jwt';
export declare class UsersService {
    private userRepository;
    private jwtService;
    constructor(userRepository: typeof User, jwtService: JwtService);
    getAllUsers(): Promise<User[]>;
    getUsersByHookan(hookanId: any): Promise<User[]>;
    getById(id: any): Promise<User>;
    updateUser(userDto: any): Promise<User>;
    login(userDto: LoginUserDto): Promise<{
        user: User;
        token: string;
    }>;
    registration(userDto: CreateUserDto): Promise<User>;
    deleteUser(id: any): Promise<number>;
    private generateToken;
    verifyToken(token: string): boolean;
    private getUserByLogin;
}

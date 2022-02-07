import { Model } from 'sequelize-typescript';
import { Hookan } from "../hookans/hookan.model";
export declare class User extends Model<User> {
    id: number;
    name: string;
    login: string;
    password: string;
    role: string;
    chatId: number;
    hookan: Hookan;
    hookanId: Hookan;
}

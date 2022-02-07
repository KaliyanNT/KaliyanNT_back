import { Model } from 'sequelize-typescript';
import { Place } from "../places/place.model";
import { Customer } from "../customers/customer.model";
import { Hookan } from '../hookans/hookan.model';
export declare class Booking extends Model<Booking> {
    id: number;
    date: string;
    startTime: string;
    endTime: string;
    confirm: string;
    confirmAdminId: number;
    noteToAdmin: string;
    noteToUser: string;
    place: Place;
    placeId: Place;
    hookan: Hookan;
    hookanId: Hookan;
    customer: Customer;
    customerId: Customer;
}

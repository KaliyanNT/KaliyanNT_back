import { Model } from 'sequelize-typescript';
import { Booking } from "../booking/booking.model";
export declare class Customer extends Model<Customer> {
    id: number;
    chatId: number;
    first_name: string;
    username: string;
    bookings: Booking;
}

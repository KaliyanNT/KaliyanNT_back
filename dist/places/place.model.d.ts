import { Model } from 'sequelize-typescript';
import { Hookan } from 'src/hookans/hookan.model';
import { Booking } from "../booking/booking.model";
export declare class Place extends Model<Place> {
    id: number;
    name: string;
    type: string;
    maxPerson: number;
    hookan: Hookan;
    hookanId: Hookan;
    bookings: Booking;
}

import { Model } from 'sequelize-typescript';
import { Place } from 'src/places/place.model';
import { User } from '../users/user.model';
import { Booking } from '../booking/booking.model';
export declare class Hookan extends Model<Hookan> {
    id: number;
    name: string;
    description: string;
    address: string;
    phone: string;
    coordinates: string;
    workingHour: Object;
    places: Place;
    users: User;
    bookings: Booking;
}

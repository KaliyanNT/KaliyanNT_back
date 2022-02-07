import { Booking } from './booking.model';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
export declare class BookingService {
    private bookingRepository;
    constructor(bookingRepository: typeof Booking);
    getAll(): Promise<Booking[]>;
    getByHookan(hookanId: any): Promise<Booking[]>;
    getByPlace(placeId: any): Promise<Booking[]>;
    getById(id: any): Promise<Booking[]>;
    create(bookingDto: CreateBookingDto): Promise<Booking>;
    update(bookingDto: UpdateBookingDto): Promise<Booking[]>;
    delete(id: any): Promise<void>;
}

import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
export declare class BookingController {
    private readonly bookingService;
    constructor(bookingService: BookingService);
    getAll(): Promise<import("./booking.model").Booking[]>;
    getById(id: string): Promise<import("./booking.model").Booking[]>;
    getByHookan(id: string): Promise<import("./booking.model").Booking[]>;
    getByPlace(id: string): Promise<import("./booking.model").Booking[]>;
    update(bookingDto: UpdateBookingDto): Promise<import("./booking.model").Booking[]>;
    create(bookingDto: CreateBookingDto): Promise<import("./booking.model").Booking>;
}

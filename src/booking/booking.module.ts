import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { Booking } from "./booking.model";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
    imports: [
        SequelizeModule.forFeature([Booking])
    ],
    providers: [BookingService],
    controllers: [BookingController]
})
export class BookingModule {
}

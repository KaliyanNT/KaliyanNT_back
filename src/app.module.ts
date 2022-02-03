import { Module } from '@nestjs/common'
import { HookanModule } from './hookans/hookan.module'
import { UsersModule } from './users/users.module'
import { PlacesModule } from './places/places.module'
import { BookingModule } from './booking/booking.module';
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/user.model';
import { Hookan } from './hookans/hookan.model';
import { Place } from "./places/place.model";
import { Booking } from "./booking/booking.model";
import { CustomersModule } from './customers/customers.module';
import { Customer } from "./customers/customer.model";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.env`,
        }),
        SequelizeModule.forRoot({
            dialect: 'mysql',
            host: process.env.MYSQL_HOST,
            port: Number(process.env.MYSQL_PORT),
            username: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DB,
            models: [User, Hookan, Place, Booking, Customer],
            autoLoadModels: true
        }),
        HookanModule,
        UsersModule,
        PlacesModule,
        BookingModule,
        CustomersModule,

    ],
})

export class AppModule {
}

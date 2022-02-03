import { Module } from '@nestjs/common';
import { HookanController } from "./hookan.controller";
import { HookanService } from './hookan.service';
import { Hookan } from "./hookan.model";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
    imports: [
        SequelizeModule.forFeature([Hookan]),
    ],
    controllers: [HookanController],
    providers: [HookanService],
    exports: [HookanService]
})
export class HookanModule {
}

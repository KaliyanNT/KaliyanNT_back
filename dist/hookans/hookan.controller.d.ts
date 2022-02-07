import { HookanService } from './hookan.service';
import { CreateHookanDto } from './dto/create-hookan.dto';
import { UpdateHookanDto } from './dto/update-hookan.dto';
export declare class HookanController {
    private readonly hookanService;
    constructor(hookanService: HookanService);
    getAll(): Promise<import("./hookan.model").Hookan[]>;
    getById(id: string): Promise<import("./hookan.model").Hookan>;
    update(hookanDto: UpdateHookanDto): Promise<import("./hookan.model").Hookan>;
    create(hookanDto: CreateHookanDto): Promise<import("./hookan.model").Hookan>;
    delete(id: string): Promise<void>;
}

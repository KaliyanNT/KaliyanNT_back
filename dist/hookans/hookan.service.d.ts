import { Hookan } from './hookan.model';
import { CreateHookanDto } from './dto/create-hookan.dto';
import { UpdateHookanDto } from './dto/update-hookan.dto';
export declare class HookanService {
    private hookanRepository;
    constructor(hookanRepository: typeof Hookan);
    getAll(): Promise<Hookan[]>;
    getById(id: any): Promise<Hookan>;
    create(hookanDto: CreateHookanDto): Promise<Hookan>;
    update(hookanDto: UpdateHookanDto): Promise<Hookan>;
    delete(id: any): Promise<void>;
}

import { UpdatePlaceDto } from './dto/update-place.dto';
import { CreatePlaceDto } from './dto/create-place.dto';
import { PlacesService } from './places.service';
export declare class PlacesController {
    private readonly placeService;
    constructor(placeService: PlacesService);
    getAll(): Promise<import("./place.model").Place[]>;
    getAllByHookan(id: string): Promise<import("./place.model").Place[]>;
    getById(id: string): Promise<import("./place.model").Place>;
    update(placeDto: UpdatePlaceDto): Promise<import("./place.model").Place>;
    create(placeDto: CreatePlaceDto): Promise<import("./place.model").Place>;
    delete(id: string): Promise<void>;
}

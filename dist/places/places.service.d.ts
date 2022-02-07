import { UpdatePlaceDto } from './dto/update-place.dto';
import { CreatePlaceDto } from './dto/create-place.dto';
import { Place } from './place.model';
export declare class PlacesService {
    private placeRepository;
    constructor(placeRepository: typeof Place);
    getAll(): Promise<Place[]>;
    getByHookan(hookanId: any): Promise<Place[]>;
    getById(id: any): Promise<Place>;
    create(placeDto: CreatePlaceDto): Promise<Place>;
    update(placeDto: UpdatePlaceDto): Promise<Place>;
    delete(id: any): Promise<void>;
}

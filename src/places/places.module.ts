import { Module }           from '@nestjs/common'
import { PlacesController } from './places.controller'
import { PlacesService }    from './places.service'
import { SequelizeModule }  from '@nestjs/sequelize'
import { Place }            from './place.model'


@Module({
    imports: [
        SequelizeModule.forFeature([Place])
    ],
    controllers: [PlacesController],
    providers: [PlacesService],
    exports: [PlacesService]
})
export class PlacesModule {
}

import { Module } from '@nestjs/common';
import { ManufacturesService } from './manufactures.service';
import { ManufacturesController } from './manufactures.controller';
import { Manufacture, ManufactureSchema } from './schemas/manufacture.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Manufacture.name, schema: ManufactureSchema },
    ]),
  ],
  controllers: [ManufacturesController],
  providers: [ManufacturesService],
})
export class ManufacturesModule {}

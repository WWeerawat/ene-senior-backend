import { Injectable } from '@nestjs/common';
import { CreateManufactureDto } from './dto/create-manufacture.dto';
import { UpdateManufactureDto } from './dto/update-manufacture.dto';
import { Manufacture, ManufactureDocument } from './schemas/manufacture.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ManufacturesService {
  constructor(
    @InjectModel(Manufacture.name)
    private manufactureModel: Model<ManufactureDocument>,
  ) {}

  async create(createManufactureDto: CreateManufactureDto) {
    const createdManufacture = new this.manufactureModel(createManufactureDto);
    return createdManufacture.save();
  }

  async findAll() {
    return this.manufactureModel.find();
  }

  async findOne(id: string) {
    return this.manufactureModel.findById(id);
  }

  async update(id: string, updateManufactureDto: UpdateManufactureDto) {
    return this.manufactureModel.findByIdAndUpdate(id, updateManufactureDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.manufactureModel.findByIdAndDelete(id);
  }
}

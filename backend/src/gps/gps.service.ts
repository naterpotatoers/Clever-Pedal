import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateGpDto } from './dto/create-gp.dto';
import { UpdateGpDto } from './dto/update-gp.dto';
import { GpsEntity } from './entities/gp.entity';

@Injectable()
export class GpsService {
  constructor(
    @InjectRepository(GpsEntity)
    private repository: Repository<GpsEntity>,
  ) {}

  create(createGpDto: CreateGpDto): Promise<GpsEntity> {
    const gps = new GpsEntity();
    gps.name = createGpDto.name;
    gps.longitude = createGpDto.longitude;
    gps.latitude = createGpDto.latitude;
    return this.repository.save(gps);
  }

  findAll(): Promise<GpsEntity[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<GpsEntity> {
    return this.repository.findOne(id);
  }

  async update(id: number, updateGpDto: UpdateGpDto): Promise<UpdateResult> {
    const gps = await this.findOne(id);
    gps.longitude = updateGpDto.longitude;
    gps.latitude = updateGpDto.latitude;
    return await this.repository.update(id, gps);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}

import { Module } from '@nestjs/common';
import { GpsService } from './gps.service';
import { GpsController } from './gps.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GpsEntity } from './entities/gp.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GpsEntity])],
  controllers: [GpsController],
  providers: [GpsService],
})
export class GpsModule {}

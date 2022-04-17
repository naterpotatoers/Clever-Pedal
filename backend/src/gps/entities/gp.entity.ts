import { IsDate, IsInt, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GpsEntity {
  @IsInt()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @IsDate()
  @Column({ default: () => 'NOW()' })
  date: Date;

  @IsString()
  @Column({ default: 'RPi' })
  name: string;

  @IsInt()
  @Column({ default: 0 })
  longitude: number;

  @IsInt()
  @Column({ default: 0 })
  latitude: number;
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateGpDto } from './create-gp.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateGpDto extends PartialType(CreateGpDto) {
  @ApiProperty({
    example: 'Nates-RPi',
    description: 'The name of the Raspberry Pi device',
  })
  name: string;
  @ApiProperty()
  longitude: number;
  @ApiProperty()
  latitude: number;
}

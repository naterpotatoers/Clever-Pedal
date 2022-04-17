import { ApiProperty } from '@nestjs/swagger';

export class CreateGpDto {
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

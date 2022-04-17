import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GpsEntity } from './gps/entities/gp.entity';
import { GpsModule } from './gps/gps.module';

@Module({
  imports: [
    GpsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '34.83.115.235',
      port: 3306,
      username: 'root',
      password: 'izzys@crackhead',
      database: 'db_v1',
      entities: [GpsEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

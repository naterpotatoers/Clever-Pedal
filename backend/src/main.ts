import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { GpsModule } from './gps/gps.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const config = new DocumentBuilder()
    .setTitle('Clever Pedal')
    .setDescription('The REST API for Clever Pedal')
    .setVersion('1.0')
    .build();

  const swagger = SwaggerModule.createDocument(app, config, {
    include: [GpsModule],
  });

  SwaggerModule.setup('/', app, swagger, {
    customSiteTitle: 'Clever Pedal API',
  });
  await app.listen(5000);
  console.log(await app.getUrl());
}
bootstrap();

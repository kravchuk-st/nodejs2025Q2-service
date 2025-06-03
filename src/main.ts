import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, OpenAPIObject } from '@nestjs/swagger';
import { load } from 'js-yaml';
import { join } from 'path';
import { readFileSync } from 'fs';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const configService = app.get(ConfigService);
  const port = configService.get('PORT') ?? 4000;

  const apiDocument = load(
    readFileSync(join(__dirname, '../doc/api.yaml'), 'utf8'),
  ) as Omit<OpenAPIObject, 'paths'>;

  const document = SwaggerModule.createDocument(app, apiDocument);
  SwaggerModule.setup('doc', app, document);

  await app.listen(port);
}
bootstrap();

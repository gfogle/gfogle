import * as fs from 'fs';
import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import {
  NestFastifyApplication,
  FastifyAdapter,
} from '@nestjs/platform-fastify';
import { Module } from '@nestjs/common';

async function autoload(directory) {
  const directories = fs.readdirSync(directory);
  const modules = [];

  for (let i = 0; i < directories.length; i++) {
    try {
      const module = await import(`${directory}/${directories[i]}/module`);

      modules.push(module.default);
    } catch (ex) {
      console.error(`Unable to load module ${directories[i]}`);
    }
  }

  return modules;
}

async function bootstrap() {
  const imports = await autoload(`${__dirname}/modules`);

  @Module({
    imports,
    controllers: [],
    providers: [],
  })
  class RootModule {}

  const app = await NestFactory.create<NestFastifyApplication>(
    RootModule,
    new FastifyAdapter(),
  );

  app.useStaticAssets({
    root: join(__dirname, '..', 'dist', 'public'),
    prefix: '/public/',
  });

  app.setViewEngine({
    engine: {
      ejs: require('ejs'),
    },
    templates: join(__dirname, 'views'),
  });

  await app.listen(3000, '0.0.0.0');
}

bootstrap();

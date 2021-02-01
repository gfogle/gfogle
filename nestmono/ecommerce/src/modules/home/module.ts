import { Module } from '@nestjs/common';
import { HomeController } from './controllers/controller';

@Module({
  controllers: [HomeController],
  providers: [],
})
export default class HomeModule {}

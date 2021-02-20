import { Module } from '@nestjs/common';
import FController from './controllers/controller';
import FService from './services/service';

@Module({
  controllers: [FController],
  providers: [FService],
})
export default class FModule {}

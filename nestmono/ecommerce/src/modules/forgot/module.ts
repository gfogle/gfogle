import { Module } from '@nestjs/common';
import FORGOTorgotController from './controllers/controller';
import FORGOTorgotService from './services/service';

@Module({
  controllers: [FORGOTorgotController],
  providers: [FORGOTorgotService],
})
export default class FORGOTorgotModule {}

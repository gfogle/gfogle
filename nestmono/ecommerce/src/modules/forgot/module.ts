import { Module } from '@nestjs/common';
import ForgotController from './controllers/controller';
import ForgotService from './services/service';

@Module({
  controllers: [ForgotController],
  providers: [ForgotService],
})
export default class ForgotModule {}

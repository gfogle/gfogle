import { Module } from '@nestjs/common';
import { LoginController } from './controllers/controller';
import { LoginService } from './services/service';

@Module({
  controllers: [LoginController],
  providers: [LoginService],
})
export default class LoginModule {}

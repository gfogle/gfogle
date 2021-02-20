import { Controller, Get, Render } from '@nestjs/common';
import ForgotService from '../services/service';

@Controller()
export default class ForgotController {
  constructor(private readonly service: ForgotService) {}

  @Get('/forgot')
  @Render('forgot/forgot.ejs')
  getView() {
    return;
  }
}

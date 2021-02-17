import { Controller, Get, Render } from '@nestjs/common';
import FORGOTorgotService from '../services/service';

@Controller()
export default class FORGOTorgotController {
  constructor(private readonly service: FORGOTorgotService) {}

  @Get('/forgot')
  @Render('forgot/forgot.ejs')
  getView() {
    return;
  }
}

import { Controller, Get, Render } from '@nestjs/common';
import FService from '../services/service';

@Controller()
export default class FController {
  constructor(private readonly service: FService) {}

  @Get('/forgot')
  @Render('forgot/forgot.ejs')
  getView() {
    return;
  }
}

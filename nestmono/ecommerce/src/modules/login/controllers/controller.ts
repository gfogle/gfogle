import { Controller, Get, Render } from '@nestjs/common';
import { LoginService } from '../services/service';

@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get('/login')
  @Render('login/login.ejs')
  getLogin() {
    if (!this.loginService.loggedIn()) {
      return;
    }
  }
}

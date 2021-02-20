import { Test, TestingModule } from '@nestjs/testing';
import { LoginController } from './controller';
import { LoginService } from '../services/service';

describe('LoginController', () => {
  let controller: LoginController;
  let service: LoginService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LoginController],
      providers: [LoginService],
    }).compile();

    controller = app.get<LoginController>(LoginController);
    service = app.get<LoginService>(LoginService);
  });

  describe('/login', () => {
    it('renders when isLoggedIn is false', () => controller.getLogin());
    it('renders when isLoggedIn is true', () => {
      jest.spyOn(service, 'loggedIn').mockImplementation(() => true);
      controller.getLogin();
    });
  });
});

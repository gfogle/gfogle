import { Test } from '@nestjs/testing';
import { LoginService } from './service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      controllers: [],
      providers: [LoginService],
    }).compile();

    service = app.get<LoginService>(LoginService);
  });

  describe('isLoggedIn', () => {
    it('is false', () => {
      expect(service.loggedIn()).toBe(false);
    });
  });
});

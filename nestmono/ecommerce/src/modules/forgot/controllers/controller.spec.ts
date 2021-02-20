import { Test, TestingModule } from '@nestjs/testing';
import ForgotController from './controller';
import ForgotService from '../services/service';

describe('ForgotController', () => {
  let controller: ForgotController;
  let service: ForgotService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ForgotController],
      providers: [ForgotService],
    }).compile();

    controller = app.get<ForgotController>(ForgotController);
    service = app.get<ForgotService>(ForgotService);
  });

  describe('/forgot', () => {
    it('renders', () => {
      controller.getView();
    });
  });
});

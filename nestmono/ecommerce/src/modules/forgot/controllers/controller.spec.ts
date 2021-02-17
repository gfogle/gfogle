import { Test, TestingModule } from '@nestjs/testing';
import FORGOTorgotController from './controller';
import FORGOTorgotService from '../services/service';

describe('FORGOTorgotController', () => {
  let controller: FORGOTorgotController;
  let service: FORGOTorgotService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FORGOTorgotController],
      providers: [FORGOTorgotService],
    }).compile();

    controller = app.get<FORGOTorgotController>(FORGOTorgotController);
    service = app.get<FORGOTorgotService>(FORGOTorgotService);
  });

  describe('/forgot', () => {
    it('renders', () => {
      controller.getView();
    });
  });
});

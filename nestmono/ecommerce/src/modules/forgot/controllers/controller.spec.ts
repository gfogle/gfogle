import { Test, TestingModule } from '@nestjs/testing';
import FController from './controller';
import FService from '../services/service';

describe('FController', () => {
  let controller: FController;
  let service: FService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FController],
      providers: [FService],
    }).compile();

    controller = app.get<FController>(FController);
    service = app.get<FService>(FService);
  });

  describe('/forgot', () => {
    it('renders', () => {
      controller.getView();
    });
  });
});

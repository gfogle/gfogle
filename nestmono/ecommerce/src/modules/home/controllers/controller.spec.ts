import { Test, TestingModule } from '@nestjs/testing';
import { HomeController } from './controller';

describe('HelloController', () => {
  let controller: HomeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HomeController],
      providers: [],
    }).compile();

    controller = app.get<HomeController>(HomeController);
  });

  describe('/', () => {
    it('renders', () => controller.getHome());
  });
});

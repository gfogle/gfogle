import { Test } from '@nestjs/testing';
import FORGOTorgotService from './service';

describe('FORGOTorgotService', () => {
  let service: FORGOTorgotService;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      controllers: [],
      providers: [FORGOTorgotService],
    }).compile();

    service = app.get<FORGOTorgotService>(FORGOTorgotService);
  });

  it('is true', () => {
    expect(true).toBe(true);
  });
});

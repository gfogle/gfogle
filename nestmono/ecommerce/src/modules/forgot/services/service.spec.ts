import { Test } from '@nestjs/testing';
import ForgotService from './service';

describe('ForgotService', () => {
  let service: ForgotService;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      controllers: [],
      providers: [ForgotService],
    }).compile();

    service = app.get<ForgotService>(ForgotService);
  });

  it('is true', () => {
    expect(true).toBe(true);
  });
});

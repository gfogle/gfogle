import { Test } from '@nestjs/testing';
import FService from './service';

describe('FService', () => {
  let service: FService;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      controllers: [],
      providers: [FService],
    }).compile();

    service = app.get<FService>(FService);
  });

  it('is true', () => {
    expect(true).toBe(true);
  });
});

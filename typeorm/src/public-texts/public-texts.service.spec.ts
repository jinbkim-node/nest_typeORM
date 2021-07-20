import { Test, TestingModule } from '@nestjs/testing';
import { PublicTextsService } from './public-texts.service';

describe('PublicTextsService', () => {
  let service: PublicTextsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PublicTextsService],
    }).compile();

    service = module.get<PublicTextsService>(PublicTextsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

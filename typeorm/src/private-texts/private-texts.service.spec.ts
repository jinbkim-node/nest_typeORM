import { Test, TestingModule } from '@nestjs/testing';
import { PrivateTextsService } from './private-texts.service';

describe('PrivateTextsService', () => {
  let service: PrivateTextsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrivateTextsService],
    }).compile();

    service = module.get<PrivateTextsService>(PrivateTextsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

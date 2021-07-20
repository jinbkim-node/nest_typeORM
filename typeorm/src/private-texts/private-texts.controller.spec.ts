import { Test, TestingModule } from '@nestjs/testing';
import { PrivateTextsController } from './private-texts.controller';

describe('PrivateTextsController', () => {
  let controller: PrivateTextsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrivateTextsController],
    }).compile();

    controller = module.get<PrivateTextsController>(PrivateTextsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

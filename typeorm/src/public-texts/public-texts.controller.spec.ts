import { Test, TestingModule } from '@nestjs/testing';
import { PublicTextsController } from './public-texts.controller';

describe('PublicTextsController', () => {
  let controller: PublicTextsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublicTextsController],
    }).compile();

    controller = module.get<PublicTextsController>(PublicTextsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

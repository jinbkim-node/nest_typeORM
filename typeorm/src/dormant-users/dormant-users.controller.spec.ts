import { Test, TestingModule } from '@nestjs/testing';
import { DormantUsersController } from './dormant-users.controller';

describe('DormantUsersController', () => {
  let controller: DormantUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DormantUsersController],
    }).compile();

    controller = module.get<DormantUsersController>(DormantUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

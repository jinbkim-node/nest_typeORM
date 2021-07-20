import { Test, TestingModule } from '@nestjs/testing';
import { DormantUsersService } from './dormant-users.service';

describe('DormantUsersService', () => {
  let service: DormantUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DormantUsersService],
    }).compile();

    service = module.get<DormantUsersService>(DormantUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

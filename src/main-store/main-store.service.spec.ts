import { Test, TestingModule } from '@nestjs/testing';
import { MainStoreService } from './main-store.service';

describe('MainStoreService', () => {
  let service: MainStoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MainStoreService],
    }).compile();

    service = module.get<MainStoreService>(MainStoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

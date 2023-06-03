import { Test, TestingModule } from '@nestjs/testing';
import { MainStoreController } from './main-store.controller';
import { MainStoreService } from './main-store.service';

describe('MainStoreController', () => {
  let controller: MainStoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MainStoreController],
      providers: [MainStoreService],
    }).compile();

    controller = module.get<MainStoreController>(MainStoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

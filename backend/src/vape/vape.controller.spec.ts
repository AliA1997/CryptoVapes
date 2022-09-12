import { Test, TestingModule } from '@nestjs/testing';
import { VapeController } from './vape.controller';

describe('VapeController', () => {
  let controller: VapeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VapeController],
    }).compile();

    controller = module.get<VapeController>(VapeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

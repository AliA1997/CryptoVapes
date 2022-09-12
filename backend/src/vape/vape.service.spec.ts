import { Test, TestingModule } from '@nestjs/testing';
import { VapeService } from './vape.service';

describe('VapeService', () => {
  let service: VapeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VapeService],
    }).compile();

    service = module.get<VapeService>(VapeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

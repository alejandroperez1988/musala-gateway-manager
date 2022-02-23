import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Test, TestingModule } from '@nestjs/testing';
import { GatewaysController } from './gateways.controller';

describe('GatewaysController', () => {
  let controller: GatewaysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GatewaysController],
      providers: [InMemoryDBService],
    }).compile();

    controller = module.get<GatewaysController>(GatewaysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

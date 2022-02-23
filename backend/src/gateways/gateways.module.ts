import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { Module } from '@nestjs/common';
import { GatewaysController } from './gateways.controller';
import { GatewaysService } from './gateways.service';

@Module({
  imports: [InMemoryDBModule.forFeature('gateways')],
  controllers: [GatewaysController],
  providers: [GatewaysService],
})
export class GatewaysModule {}

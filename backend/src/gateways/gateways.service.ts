import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Injectable } from '@nestjs/common';
import { Gateways } from './gateways.interface';
import { seedData } from '../gateways/peripheral.seed-data';
@Injectable()
export class GatewaysService {
  constructor(private readonly inMemoryDBService: InMemoryDBService<Gateways>) {
    const generatedGateways = (id: number): Partial<Gateways> => ({
      name: `Gateway Number: ${id}`,
      ipv4: `192.16${id}.${id++}.${id}`,
      peripheralDevices: seedData,
    });
    this.inMemoryDBService.seed(generatedGateways, 5);
  }

  getAllGateways(): Gateways[] {
    return this.inMemoryDBService.getAll();
  }

  getGateway(id: string): Gateways {
    return this.inMemoryDBService.get(id);
  }

  deleteGateway(id: string) {
    return this.inMemoryDBService.delete(id);
  }

  addGateway(gateway: Gateways) {
    return this.inMemoryDBService.create(gateway);
  }

  updateGateway(id: string, gateway: Gateways) {
    return this.inMemoryDBService.update({ id, ...gateway });
  }
}

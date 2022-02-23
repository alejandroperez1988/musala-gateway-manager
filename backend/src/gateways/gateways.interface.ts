import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';
import { PeripheralDevice } from 'src/gateways/peripheral-device.interface';

export interface Gateways extends InMemoryDBEntity {
  name: string;
  ipv4: string;
  peripheralDevices: PeripheralDevice[];
}

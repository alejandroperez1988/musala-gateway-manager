/* eslint-disable prettier/prettier */
import { PeripheralDevice } from 'src/gateways/peripheral-device.interface';

export const seedData: PeripheralDevice[] = [
  {
    uid: 34,
    vendor: 'Huawei',
    createdDate: new Date('Mon Feb 22 2022 11:37:02 GMT-0400 (GMT-04:00)'),
    status: 0,
  },
  {
    uid: 35,
    vendor: 'Cisco',
    createdDate: new Date('Mon Feb 22 2020 11:40:47 GMT-0400 (GMT-04:00)'),
    status: 1,
  } 
];

import { PeripheralDevice } from "./peripheral-device";

export interface Gateway {
    id: string;
    name: string;
    ipv4: string;
    peripheralDevices: PeripheralDevice[];
}

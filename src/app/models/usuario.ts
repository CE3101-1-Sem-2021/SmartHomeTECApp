import { Address } from './address';
import { Region } from './region';

export class Usuario {
  name = '';
  lName = '';
  email = '';
  password = '';
  region: Region = new Region();
  deliveryAddress: Address[] = [];
}

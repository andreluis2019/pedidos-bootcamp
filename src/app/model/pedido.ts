import {Cliente} from './cliente';

export class Pedido {
  id: number;
  cliente: Cliente;
  dataEmissao: Date;
  total: number;
  pedidoItemList: [];
}

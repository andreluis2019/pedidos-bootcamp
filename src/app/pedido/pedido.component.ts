import { Component, OnInit } from '@angular/core';
import {ListComponent} from '../component/list.component';
import {Pedido} from '../model/pedido';
import {PedidoService} from '../service/pedido.service';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {ConfirmationService, MessageService} from 'primeng/api';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent extends ListComponent<Pedido> implements OnInit {

  constructor(private pedidoService: PedidoService,
              private titleService: Title,
              private router: Router,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) {
    super();
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'cliente', header: 'Cliente' },
      { field: 'dataEmissao', header: 'Data Emissão' },
      { field: 'total', header: 'Total' },
      { field: 'pedidoItemList', header: 'Lista de Itens' }
    ];
  }

  ngOnInit() {
    this.titleService.setTitle('Pedidos');
  }

  carregarLista() {
    this.loading = true;
    this.pedidoService.findAll().pipe(delay(500)).subscribe(clientes => {
      this.lista = clientes;
      this.loading = false;
    });
  }

  private deletar(id: number): void {
    this.loading = true;
    this.pedidoService.delete(id).subscribe(() => {
      this.carregarLista();
      this.messageService.add({
        severity: 'success',
        summary: 'Deletado com sucesso!'
      });
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: error.error.message
      });
      setTimeout(() => this.loading = false);
    });
  }

  excluir(id: number): void {
    this.confirmationService.confirm({
      message: 'Deseja realmente deletar o registro?',
      accept: () => {
        this.deletar(id);
      },
      acceptLabel: 'SIM',
      rejectLabel: 'NÃO',
      reject: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Registro não excluído'
        });
      }
    });
  }
}

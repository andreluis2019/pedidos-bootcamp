import { Component, OnInit } from '@angular/core';
import {ListComponent} from '../component/list.component';
import {Produto} from '../model/produto';
import {ProdutoService} from '../service/produto.service';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {ConfirmationService, MessageService} from 'primeng/api';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent extends ListComponent<Produto> implements OnInit {

  constructor(private produtoService: ProdutoService,
              private titleService: Title,
              private router: Router,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) {
    super();
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'descricao', header: 'Descrição' },
      { field: 'valorUnitario', header: 'Valor Unitário' }
    ];
  }

  ngOnInit() {
    this.titleService.setTitle('Produtos');
  }

  carregarLista(): void {
    this.loading = true;
    this.produtoService.findAll().pipe(delay(500)).subscribe(clientes => {
      this.lista = clientes;
      this.loading = false;
    });
  }

  private deletar(id: number): void {
    this.loading = true;
    this.produtoService.delete(id).subscribe(() => {
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

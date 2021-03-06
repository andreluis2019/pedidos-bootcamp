import {Component, Input, OnInit} from '@angular/core';
import {Cliente} from '../model/cliente';
import {ClienteService} from '../service/cliente.service';
import {Title} from '@angular/platform-browser';
import {delay} from 'rxjs/operators';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {ListComponent} from '../component/list.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent extends ListComponent<Cliente> implements OnInit {

  constructor(private clienteService: ClienteService,
              private titleService: Title,
              private router: Router,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) {
    super();
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'nome', header: 'Nome' },
      { field: 'cpf', header: 'Cpf' },
      { field: 'telefone', header: 'Telefone' }
    ];
  }

  ngOnInit() {
    this.titleService.setTitle('Clientes');
  }

  carregarLista(): void {
    this.loading = true;
    this.clienteService.findAll().pipe(delay(500)).subscribe(clientes => {
      this.lista = clientes;
      this.loading = false;
    });
  }

  private deletar(id: number): void {
    this.loading = true;
    this.clienteService.delete(id).subscribe(() => {
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

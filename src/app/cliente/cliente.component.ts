import { Component, OnInit } from '@angular/core';
import {Cliente} from '../model/cliente';
import {ClienteService} from '../service/cliente.service';
import {Title} from '@angular/platform-browser';
import {delay} from 'rxjs/operators';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  clienteList: Cliente[];
  cols: any[];
  loading = false;
  objeto: Cliente;

  constructor(private clienteService: ClienteService,
              private titleService: Title,
              private router: Router,
              private messageService: MessageService) {
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
      this.clienteList = clientes;
      this.loading = false;
    });
  }

  excluir(id: number): void {
    this.clienteService.delete(id).subscribe(() => {
      this.messageService.add({
        severity: 'info',
        summary: 'Excluído com sucesso!'
      });
      this.carregarLista();
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: error.error.message
      });
    });
  }
}

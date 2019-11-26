import { Component, OnInit } from '@angular/core';
import {Pedido} from '../../model/pedido';
import {ActivatedRoute, Router} from '@angular/router';
import {PedidoService} from '../../service/pedido.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.scss']
})
export class PedidoFormComponent implements OnInit {

  objeto: Pedido;

  constructor(private activatedRoute: ActivatedRoute,
              private pedidoService: PedidoService,
              private router: Router,
              private messageService: MessageService) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      if (params.has('id')) {
        this.pedidoService.findOne(parseInt(params.get('id'))).subscribe(res => {
          this.objeto = res;
        });
      } else {
        this.resetaForm();
      }
    });
  }

  private resetaForm(): void {
    this.objeto = new Pedido();
    this.objeto.cliente = null;
    this.objeto.dataEmissao = null;
    this.objeto.total = 0;
    this.objeto.pedidoItemList = [];
  }

  salvar(): void {
    this.pedidoService.save(this.objeto).subscribe(res => {
      this.objeto = res;
      this.messageService.add({
        severity: 'success',
        summary: 'Pedido salvo com sucesso!'
      });
      this.router.navigateByUrl('pedido');
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: error.error.message
      });
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {Produto} from '../../model/produto';
import {ActivatedRoute, Router} from '@angular/router';
import {ProdutoService} from '../../service/produto.service';
import {PedidoItem} from '../../model/pedidoItem';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-pedidoitem-form',
  templateUrl: './pedidoitem-form.component.html',
  styleUrls: ['./pedidoitem-form.component.scss']
})
export class PedidoitemFormComponent implements OnInit {

  objeto: PedidoItem;
  pedidoItemList: PedidoItem[];
  produtoList: Produto[];
  produtoListDropdown: SelectItem[];

  constructor(private activatedRoute: ActivatedRoute,
              private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtoService.findAll().subscribe(produto => {
      this.produtoList = produto;
      this.produtoListDropdown = this.produtoList.map(val => {
        const selectItem: SelectItem = {
          label: val.descricao,
          value: val
        };
        return selectItem;
      });
    });
  }

  adicionarNoPedido() {
    this.pedidoItemList.push(this.objeto);
  }
}

import { Component, OnInit } from '@angular/core';
import {Produto} from '../../model/produto';
import {ActivatedRoute, Router} from '@angular/router';
import {ProdutoService} from '../../service/produto.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent implements OnInit {

  objeto: Produto;

  constructor(private activatedRoute: ActivatedRoute,
              private produtoService: ProdutoService,
              private router: Router,
              private messageService: MessageService) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      if (params.has('id')) {
        this.produtoService.findOne(parseInt(params.get('id'))).subscribe(res => {
          this.objeto = res;
        });
      } else {
        this.resetaForm();
      }
    });
  }

  private resetaForm(): void {
    this.objeto = new Produto();
    this.objeto.descricao = '';
    // this.objeto.valorUnitario = 0;
  }

  salvar(): void {
    this.produtoService.save(this.objeto).subscribe(res => {
      this.objeto = res;
      this.messageService.add({
        severity: 'success',
        summary: 'Produto salvo com sucesso!'
      });
      this.router.navigateByUrl('produto');
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: error.error.message
      });
    });
  }

}

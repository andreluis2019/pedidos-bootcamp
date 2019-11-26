import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ClienteComponent} from './cliente/cliente.component';
import {ClienteFormComponent} from './cliente/cliente-form/cliente-form.component';
import {PedidoComponent} from './pedido/pedido.component';
import {PedidoFormComponent} from './pedido/pedido-form/pedido-form.component';
import {ProdutoComponent} from './produto/produto.component';
import {ProdutoFormComponent} from './produto/produto-form/produto-form.component';
import {PedidoitemFormComponent} from './pedido/pedidoitem-form/pedidoitem-form.component';


const routes: Routes = [
  {
  path: '', component: HomeComponent
  },
  {
    path: 'cliente', component: ClienteComponent,
  },
  {
    path: 'cliente/form', component: ClienteFormComponent
  },
  {
    path: 'pedido', component: PedidoComponent,
  },
  {
    path: 'pedido/form', component: PedidoFormComponent
  },
  {
    path: 'produto', component: ProdutoComponent,
  },
  {
    path: 'produto/form', component: ProdutoFormComponent
  },
  {
    path: 'pedido/form/pedidoitem/form', component: PedidoitemFormComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

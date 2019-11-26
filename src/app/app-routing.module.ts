import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ClienteComponent} from './cliente/cliente.component';
import {ClienteFormComponent} from './cliente/cliente-form/cliente-form.component';
import {PedidoComponent} from './pedido/pedido.component';
import {PedidoFormComponent} from './pedido/pedido-form/pedido-form.component';


const routes: Routes = [
  {
  path: '', component: HomeComponent
  },
  {
    path: 'cliente',
    component: ClienteComponent,
  },
  {
    path: 'cliente/form', component: ClienteFormComponent
  },
  {
    path: 'pedido',
    component: PedidoComponent,
  },
  {
    path: 'pedido/form', component: PedidoFormComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

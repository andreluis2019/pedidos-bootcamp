import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { ClienteComponent } from './cliente/cliente.component';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {FormsModule} from '@angular/forms';
import {ConfirmationService, MessageService} from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {CalendarModule, DropdownModule, SidebarModule} from 'primeng/primeng';
import {SidebarService} from './service/sidebar.service';
import {PedidoComponent} from './pedido/pedido.component';
import {PedidoFormComponent} from './pedido/pedido-form/pedido-form.component';
import {ProdutoFormComponent} from './produto/produto-form/produto-form.component';
import {ProdutoComponent} from './produto/produto.component';
import {PedidoitemFormComponent} from './pedido/pedidoitem-form/pedidoitem-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClienteComponent,
    ClienteFormComponent,
    PedidoComponent,
    PedidoFormComponent,
    ProdutoComponent,
    ProdutoFormComponent,
    PedidoitemFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ToastModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    SidebarModule,
    DropdownModule,
    CalendarModule
  ],
  providers: [
    MessageService,
    ConfirmationService,
    SidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

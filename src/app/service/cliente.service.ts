import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {Cliente} from '../model/cliente';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends BaseService<Cliente> {

  private clienteList: Cliente[];

  constructor(protected http: HttpClient) {
    super(http, 'cliente');
  }
}

import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class ClienteService {

  constructor() { }

  getClientes(): Observable<Cliente[]>{
      return of (CLIENTES); //convertimos/creamos nuestro flujo Observable a partir de los objetos CLIENTES
  }
}

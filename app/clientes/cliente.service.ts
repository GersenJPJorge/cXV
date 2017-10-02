import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Cliente } from './cliente.model';
import { CLIENTES } from './clientes-mock';

@Injectable()
export class ClienteService{

   // app é a pasta de onde fizermos a chamada
   // clientes é o nome da variável na classe InMemoryDataService
   private clientesUrl : string = 'app/clientes';

    constructor(
       private http: Http
    ) {}

    getClientes() : Promise<Cliente[]> {

       return this.http.get(this.clientesUrl) 
         .toPromise()
         .then(response => response.json().data as Cliente[])

       //return Promise.resolve(CLIENTES);        

      }


    getCliente(id:number): Promise<Cliente> {
           return this.getClientes()
           .then((clientes: Cliente[]) => clientes.find(cliente => cliente.id === id)); 
          }

}
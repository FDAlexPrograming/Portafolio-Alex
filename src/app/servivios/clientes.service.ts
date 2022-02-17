import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
  
})
export class ClientesService {

  constructor( private http:HttpClient) { }

    obtenerClientes():Observable<any>{
      return this.http.get<any>('api/ver/clientes');
    }

}

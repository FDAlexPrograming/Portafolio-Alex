import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/servivios/clientes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ClientesService], 
})
export class HeaderComponent implements OnInit {
  cliente:any;
  constructor(private datosCliente:ClientesService ) { }

  ngOnInit(): void {
    this.datosCliente.obtenerClientes().subscribe(data  => {
      console.log(data);
      this.cliente = data;
    } );
  }

}

import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-about-for-my',
  templateUrl: './about-for-my.component.html',
  styleUrls: ['./about-for-my.component.css']
  
})
export class AboutForMyComponent implements OnInit {

  cliente:any;
  constructor(private datosCliente:ClientesService ) { }

 
  ngOnInit(): void {
    this.datosCliente.obtenerClientes().subscribe(data  => {
      console.log(data);
      this.cliente =  data;
    } );
  }

}

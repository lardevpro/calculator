import { Component, OnInit } from '@angular/core';
import { TecladoComponent } from "../teclado/teclado.component";
import { PantallaComponent } from "../pantalla/pantalla.component";
import { CalculadoraService } from '../../../services/calculadora.service';

@Component({
  selector: 'app-maquina',
  imports: [TecladoComponent, PantallaComponent],
  templateUrl: './maquina.component.html',
  styleUrl: './maquina.component.scss',
  standalone: true,
  providers: [CalculadoraService], //cuando los componentes son standalone, se debe importar el servicio en el componente.
})

export class MaquinaComponent implements OnInit {
  elMensajeParaPantalla:string = '';

  constructor(private servicio: CalculadoraService) { } //Inyección del servicio

  ngOnInit(): void {
  this.elMensajeParaPantalla =  this.servicio.getValor();
  }

  botonPulsado(valor:string){
    return '12';
  }
}

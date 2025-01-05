import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-teclado',
  imports: [],
  templateUrl: './teclado.component.html',
  styleUrl: './teclado.component.scss',
  standalone: true,
})
export class TecladoComponent {

  @Output('pulsado') emisorDeEventos = new EventEmitter <string> (); //se encarga de emitir eventos(alias pulsado)

  botonPulsado(teclaPulsada:string){
    this.emisorDeEventos.emit(teclaPulsada); //emite el evento
  }
}

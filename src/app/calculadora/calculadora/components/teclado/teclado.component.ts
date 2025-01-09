import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-teclado',
  imports: [],
  templateUrl: './teclado.component.html',
  styleUrl: './teclado.component.scss',
  standalone: true,
})
export class TecladoComponent {

  @Output('pulsado') emisorDeEventos = new EventEmitter<number | string>();

  botonPulsado(teclaPulsada: string | number) {
    const tecla = isNaN(Number(teclaPulsada)) ? teclaPulsada : Number(teclaPulsada);
    this.emisorDeEventos.emit(tecla);
  }
}

import { Component } from '@angular/core';
import { TecladoComponent } from "../teclado/teclado.component";
import { PantallaComponent } from "../pantalla/pantalla.component";

@Component({
  selector: 'app-maquina',
  imports: [TecladoComponent, PantallaComponent],
  templateUrl: './maquina.component.html',
  styleUrl: './maquina.component.scss',
  standalone: true,
})
export class MaquinaComponent {

}

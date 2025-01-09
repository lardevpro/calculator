import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pantalla',
  imports: [],
  templateUrl: './pantalla.component.html',
  styleUrl: './pantalla.component.scss',
  standalone: true,
})
export class PantallaComponent {
  @Input() mensajeAMostrar: string = '0';
}

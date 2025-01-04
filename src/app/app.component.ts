import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaquinaComponent } from "./calculadora/calculadora/components/maquina/maquina.component";

@Component({
  selector: 'app-root',
  imports: [MaquinaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  //prueba de interpolación (declaración de variables).
  //mensaje = 'Hola qué tal';


  // cambiar(){
  //   this.mensaje = 'Adios';
  // }
}

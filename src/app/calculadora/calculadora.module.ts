import { NgModule } from '@angular/core'; //módulos de typescript.
import { CommonModule } from '@angular/common';


//un decorador es una función que modifica el código de la clase.
@NgModule({

  //declaracion de lo componetes de este módulo cuando no son standalone.
  declarations: [],

  //imporación de módulos de typescript, creados por ti o no, con el decorador ngModule.
  imports: [
    CommonModule
  ],

  //es para dar permiso de visibilidad de estos componentes en otros módulos(en otras vesiones).
  exports: [ ],
  
  //servicios que se van a importar a este módulo.
  providers: [],


})

//nombre del módulo para importar en otros módulos.
export class CalculadoraModule { }

import { Injectable } from '@angular/core';


@Injectable(
  
  
  // {providedIn: 'root' los servicios por defecto los servicios no depende de ningun modulo. }
  //para hacerlos dependiendo de un módulo se deben definir en providers en calculadora.module.ts
  
)
export class CalculadoraService {

  constructor() { }

  getEjemplo():string {
    return 'Hola mundo';
  }
}

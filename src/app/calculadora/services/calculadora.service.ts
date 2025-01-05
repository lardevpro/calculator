import { Injectable } from '@angular/core';

//el servicio se debe hacer demasiado extricto y bien delimitado. Más a la programación orientado objetos.
@Injectable(
  
  
  // {providedIn: 'root' los servicios por defecto los servicios no depende de ningun modulo. }
  //para hacerlos dependiendo de un módulo se deben definir en providers en calculadora.module.ts
  
)
export class CalculadoraService {

  constructor() { }

  getValor(): string {
    return '0';
  }
}

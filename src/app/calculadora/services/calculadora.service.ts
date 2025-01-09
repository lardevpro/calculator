import { Injectable } from '@angular/core';

enum Estado {
  UNO,
  DOS,
  FINAL,
}

@Injectable()
export class CalculadoraService {
  private operandoUno = 0;
  private operandoDos = 0;
  private operacion = '';
  private estado = Estado.UNO;
  private resultado = 0;

  public teclaPulsada(tecla: number | string): string {
    if (this.estado === Estado.FINAL) 
      this.iniciarTodo();

    if (tecla === 'C') {
      this.iniciarTodo();
      return this.getResultado();
    }

    if (this.estado === Estado.UNO) {
      this.operarConPrimerEstado(tecla);
    } else {
      this.operarConSegundoEstado(tecla);
    }
    
    return this.getResultado();
  }

  public getResultado(): string {
    if (this.estado === Estado.UNO) {
      return this.operandoUno.toString();
    } else if (this.estado === Estado.DOS) {
      return this.operandoUno + this.operacion + (this.operandoDos ? this.operandoDos : '');
    } else {
      return this.resultado.toString();
    }
  }

  private iniciarTodo(): void {
    this.operandoUno = 0;
    this.operandoDos = 0;
    this.operacion = '';
    this.estado = Estado.UNO;
    this.resultado = 0;
  }

  private operarConPrimerEstado(tecla: number | string): void {
    if (typeof tecla === "number") {
      this.operandoUno = this.operandoUno * 10 + tecla;
    } else if (['+', '-', 'x', '/'].includes(tecla)) {
      this.operacion = tecla;
      this.estado = Estado.DOS;
    }
  }

  private operarConSegundoEstado(tecla: number | string): void {
    if (typeof tecla === "number") {
      this.operandoDos = this.operandoDos * 10 + tecla;
    } else if (tecla === '=') {
      this.estado = Estado.FINAL;
      this.resultado = this.calculadoraResultado();
    }
  }

  private calculadoraResultado(): number {
    switch (this.operacion) {
      case '+':
        return this.operandoUno + this.operandoDos;
      case '-':
        return this.operandoUno - this.operandoDos;
      case 'x':
        return this.operandoUno * this.operandoDos;
      case '/':
        if (this.operandoDos === 0) {
          return NaN; // no se puede dividir por cero
        }
        return this.operandoUno / this.operandoDos;
    }
    return 0;
  }
}

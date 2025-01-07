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
    if (this.estado === Estado.FINAL) this.iniciarTodo();

    if (tecla === 'C') {
      this.iniciarTodo();
      return this.getResultado();
    }

    if (this.estado === Estado.UNO) return this.operarConPrimerEstado(tecla);
    else return this.operarConSegundoEstado(tecla);
  }

  public getResultado(): string {
    return this.resultado.toString();
  }

  private iniciarTodo(): void {
    this.operandoUno = 0;
    this.operandoDos = 0;
    this.operacion = '';
    this.estado = Estado.UNO;
    this.resultado = 0;
  }

  private operarConPrimerEstado(tecla: string | number): string {
    if (typeof tecla === 'number') {
      this.operandoUno = this.operandoUno * 10 + tecla;
    } else  {
      this.operacion = tecla;
      this.estado = Estado.DOS;
    }
    return this.operandoUno + this.operacion;
  }

  private operarConSegundoEstado(tecla: string | number): string {
    if (typeof tecla === 'number') {
      this.operandoDos = this.operandoDos * 10 + tecla;
      return this.operandoUno + this.operacion + this.operandoDos;
    } else if (tecla === '=') {
      this.estado = Estado.FINAL;
      return this.calculadoraResultado().toString();
    } else {
      return 'error, ni idea';
    }
  }

  private calculadoraResultado(): number {
    switch (this.operacion) {
      case '+':
        this.resultado = this.operandoUno + this.operandoDos;
        break;
      case '-':
        this.resultado = this.operandoUno - this.operandoDos;
        break;
      case 'x':
        this.resultado = this.operandoUno * this.operandoDos;
        break;
      case '/':
        this.resultado = this.operandoUno / this.operandoDos;
        break;
    }
    return this.resultado;
  }
}

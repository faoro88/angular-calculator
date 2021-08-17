import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  static readonly ADD: string = '+';
  static readonly SUB: string = '-';
  static readonly DIV: string = '/';
  static readonly MUL: string = '*';

  constructor() {}
  /**
   *
   * @param num1
   * @param num2
   * @param operation
   * @returns
   */

  calcular(num1: number, num2: number, operation: string): number {
    let result: number;

    switch (operation) {
      case CalculatorService.ADD:
        result = num1 + num2;
        break;
      case CalculatorService.SUB:
        result = num1 - num2;
        break;
      case CalculatorService.MUL:
        result = num1 * num2;
        break;
      case CalculatorService.DIV:
        result = num1 / num2;
        break;
      default:
        result = 0;
    }
    return result;
  }
}

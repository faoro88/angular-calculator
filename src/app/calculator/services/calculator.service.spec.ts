import { TestBed, inject } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should expect that 1 + 4 = 5', inject(
    [CalculatorService],
    (service: CalculatorService) => {
      let add = service.calcular(1, 4, CalculatorService.ADD);
      expect(add).toEqual(5);
    }
  ));

  it('should expect that 1 - 4 = -3', inject(
    [CalculatorService],
    (service: CalculatorService) => {
      let add = service.calcular(1, 4, CalculatorService.SUB);
      expect(add).toEqual(-3);
    }
  ));

  it('should expect that 1 * 4 = 4', inject(
    [CalculatorService],
    (service: CalculatorService) => {
      let add = service.calcular(1, 4, CalculatorService.MUL);
      expect(add).toEqual(4);
    }
  ));

  it('should expect that 6 / 2 = 3', inject(
    [CalculatorService],
    (service: CalculatorService) => {
      let add = service.calcular(6, 2, CalculatorService.DIV);
      expect(add).toEqual(3);
    }
  ));
});

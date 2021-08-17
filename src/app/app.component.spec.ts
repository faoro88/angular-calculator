import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CalculatorModule } from './calculator';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [CalculatorModule],
    }).compileComponents();
  });
});

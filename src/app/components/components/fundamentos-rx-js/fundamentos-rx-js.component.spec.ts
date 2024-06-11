import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundamentosRxJSComponent } from './fundamentos-rx-js.component';

describe('FundamentosRxJSComponent', () => {
  let component: FundamentosRxJSComponent;
  let fixture: ComponentFixture<FundamentosRxJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundamentosRxJSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FundamentosRxJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

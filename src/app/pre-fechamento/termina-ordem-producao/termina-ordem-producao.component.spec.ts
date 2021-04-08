import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminaOrdemProducaoComponent } from './termina-ordem-producao.component';

describe('TerminaOrdemProducaoComponent', () => {
  let component: TerminaOrdemProducaoComponent;
  let fixture: ComponentFixture<TerminaOrdemProducaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminaOrdemProducaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminaOrdemProducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

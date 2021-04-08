import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemSaldoOrdensComponent } from './listagem-saldo-ordens.component';

describe('ListagemSaldoOrdensComponent', () => {
  let component: ListagemSaldoOrdensComponent;
  let fixture: ComponentFixture<ListagemSaldoOrdensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemSaldoOrdensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemSaldoOrdensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

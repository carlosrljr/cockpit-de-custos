import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorasApropriadasComponent } from './horas-apropriadas.component';

describe('HorasApropriadasComponent', () => {
  let component: HorasApropriadasComponent;
  let fixture: ComponentFixture<HorasApropriadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorasApropriadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorasApropriadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

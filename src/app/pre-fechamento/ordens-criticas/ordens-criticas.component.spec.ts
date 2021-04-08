import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdensCriticasComponent } from './ordens-criticas.component';

describe('OrdensCriticasComponent', () => {
  let component: OrdensCriticasComponent;
  let fixture: ComponentFixture<OrdensCriticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdensCriticasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdensCriticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarReporteComponent } from './visualizar-reporte.component';

describe('VisualizarReporteComponent', () => {
  let component: VisualizarReporteComponent;
  let fixture: ComponentFixture<VisualizarReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarReporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

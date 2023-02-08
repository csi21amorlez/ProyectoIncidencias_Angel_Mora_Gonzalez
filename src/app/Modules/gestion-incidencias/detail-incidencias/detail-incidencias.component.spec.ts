import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailIncidenciasComponent } from './detail-incidencias.component';

describe('DetailIncidenciasComponent', () => {
  let component: DetailIncidenciasComponent;
  let fixture: ComponentFixture<DetailIncidenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailIncidenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailIncidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

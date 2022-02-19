import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaillePoucesComponent } from './taille-pouces.component';

describe('TaillePoucesComponent', () => {
  let component: TaillePoucesComponent;
  let fixture: ComponentFixture<TaillePoucesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaillePoucesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaillePoucesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

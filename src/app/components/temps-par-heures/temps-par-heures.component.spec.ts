import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempsParHeuresComponent } from './temps-par-heures.component';

describe('TempsParHeuresComponent', () => {
  let component: TempsParHeuresComponent;
  let fixture: ComponentFixture<TempsParHeuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempsParHeuresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempsParHeuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

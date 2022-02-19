import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempsParJoursComponent } from './temps-par-jours.component';

describe('TempsParJoursComponent', () => {
  let component: TempsParJoursComponent;
  let fixture: ComponentFixture<TempsParJoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempsParJoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempsParJoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

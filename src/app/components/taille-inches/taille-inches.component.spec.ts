import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailleInchesComponent } from './taille-inches.component';

describe('TailleInchesComponent', () => {
  let component: TailleInchesComponent;
  let fixture: ComponentFixture<TailleInchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TailleInchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TailleInchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

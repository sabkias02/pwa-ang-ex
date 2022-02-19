import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaillePiedsComponent } from './taille-pieds.component';

describe('TaillePiedsComponent', () => {
  let component: TaillePiedsComponent;
  let fixture: ComponentFixture<TaillePiedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaillePiedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaillePiedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

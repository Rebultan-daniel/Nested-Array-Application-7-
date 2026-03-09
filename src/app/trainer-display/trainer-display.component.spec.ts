import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerDisplayComponent } from './trainer-display.component';

describe('TrainerDisplayComponent', () => {
  let component: TrainerDisplayComponent;
  let fixture: ComponentFixture<TrainerDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainerDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

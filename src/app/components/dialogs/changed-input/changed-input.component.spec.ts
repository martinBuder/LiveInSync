import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangedInputComponent } from './changed-input.component';

describe('ChangedInputComponent', () => {
  let component: ChangedInputComponent;
  let fixture: ComponentFixture<ChangedInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangedInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

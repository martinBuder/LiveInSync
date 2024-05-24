import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningCardComponent } from './cleaning-card.component';

describe('CleaningCardComponent', () => {
  let component: CleaningCardComponent;
  let fixture: ComponentFixture<CleaningCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CleaningCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CleaningCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

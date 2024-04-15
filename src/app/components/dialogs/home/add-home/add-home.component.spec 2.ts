import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHomeComponent } from './add-home.component';

describe('AddHomeComponent', () => {
  let component: AddHomeComponent;
  let fixture: ComponentFixture<AddHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

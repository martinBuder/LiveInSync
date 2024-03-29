import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistedComponent } from './user-registed.component';

describe('UserRegistedComponent', () => {
  let component: UserRegistedComponent;
  let fixture: ComponentFixture<UserRegistedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRegistedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserRegistedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

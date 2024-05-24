import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetHomeComponent } from './get-home.component';

describe('GetHomeComponent', () => {
  let component: GetHomeComponent;
  let fixture: ComponentFixture<GetHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

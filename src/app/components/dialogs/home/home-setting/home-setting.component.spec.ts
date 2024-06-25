import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSettingComponent } from './home-setting.component';

describe('HomeSettingComponent', () => {
  let component: HomeSettingComponent;
  let fixture: ComponentFixture<HomeSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSettingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

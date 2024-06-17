import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectHomeComponent } from './connect-home.component';

describe('ConnectHomeComponent', () => {
  let component: ConnectHomeComponent;
  let fixture: ComponentFixture<ConnectHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnectHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConnectHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

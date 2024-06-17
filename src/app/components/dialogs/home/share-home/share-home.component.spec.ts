import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareHomeComponent } from './share-home.component';

describe('ShareHomeComponent', () => {
  let component: ShareHomeComponent;
  let fixture: ComponentFixture<ShareHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShareHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

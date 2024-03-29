import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedPasswordComponent } from './saved-password.component';

describe('SavedPasswordComponent', () => {
  let component: SavedPasswordComponent;
  let fixture: ComponentFixture<SavedPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedPasswordComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SavedPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

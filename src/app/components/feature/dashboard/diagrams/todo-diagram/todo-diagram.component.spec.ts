import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDiagramComponent } from './todo-diagram.component';

describe('TodoDiagramComponent', () => {
  let component: TodoDiagramComponent;
  let fixture: ComponentFixture<TodoDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoDiagramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

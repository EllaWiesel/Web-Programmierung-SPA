import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskallComponent } from './taskall.component';

describe('TaskallComponent', () => {
  let component: TaskallComponent;
  let fixture: ComponentFixture<TaskallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

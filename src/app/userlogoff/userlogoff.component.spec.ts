import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlogoffComponent } from './userlogoff.component';

describe('UserlogoffComponent', () => {
  let component: UserlogoffComponent;
  let fixture: ComponentFixture<UserlogoffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserlogoffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserlogoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

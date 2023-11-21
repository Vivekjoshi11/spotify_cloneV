import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaysignupComponent } from './playsignup.component';

describe('PlaysignupComponent', () => {
  let component: PlaysignupComponent;
  let fixture: ComponentFixture<PlaysignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaysignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaysignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

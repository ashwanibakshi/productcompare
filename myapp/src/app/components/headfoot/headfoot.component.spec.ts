import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadfootComponent } from './headfoot.component';

describe('HeadfootComponent', () => {
  let component: HeadfootComponent;
  let fixture: ComponentFixture<HeadfootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadfootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadfootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

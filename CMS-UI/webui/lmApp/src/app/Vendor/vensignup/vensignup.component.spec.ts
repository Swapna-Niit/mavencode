import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VensignupComponent } from './vensignup.component';

describe('VensignupComponent', () => {
  let component: VensignupComponent;
  let fixture: ComponentFixture<VensignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VensignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VensignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenwalletComponent } from './venwallet.component';

describe('VenwalletComponent', () => {
  let component: VenwalletComponent;
  let fixture: ComponentFixture<VenwalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenwalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenwalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

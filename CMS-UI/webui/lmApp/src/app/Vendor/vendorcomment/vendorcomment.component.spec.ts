import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorcommentComponent } from './vendorcomment.component';

describe('VendorcommentComponent', () => {
  let component: VendorcommentComponent;
  let fixture: ComponentFixture<VendorcommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorcommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorcommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

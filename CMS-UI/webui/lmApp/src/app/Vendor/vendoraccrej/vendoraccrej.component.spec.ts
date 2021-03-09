import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendoraccrejComponent } from './vendoraccrej.component';

describe('VendoraccrejComponent', () => {
  let component: VendoraccrejComponent;
  let fixture: ComponentFixture<VendoraccrejComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendoraccrejComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendoraccrejComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

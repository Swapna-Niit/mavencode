import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuswalletComponent } from './cuswallet.component';

describe('CuswalletComponent', () => {
  let component: CuswalletComponent;
  let fixture: ComponentFixture<CuswalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuswalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuswalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

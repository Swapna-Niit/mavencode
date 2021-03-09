import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusnavbarComponent } from './cusnavbar.component';

describe('CusnavbarComponent', () => {
  let component: CusnavbarComponent;
  let fixture: ComponentFixture<CusnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

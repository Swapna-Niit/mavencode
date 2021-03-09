import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CushistoryComponent } from './cushistory.component';

describe('CushistoryComponent', () => {
  let component: CushistoryComponent;
  let fixture: ComponentFixture<CushistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CushistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CushistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

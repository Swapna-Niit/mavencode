import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenhistoryComponent } from './venhistory.component';

describe('VenhistoryComponent', () => {
  let component: VenhistoryComponent;
  let fixture: ComponentFixture<VenhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

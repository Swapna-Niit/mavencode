import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VennavbarComponent } from './vennavbar.component';

describe('VennavbarComponent', () => {
  let component: VennavbarComponent;
  let fixture: ComponentFixture<VennavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VennavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VennavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

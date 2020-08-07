import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentsGridComponent } from './continents-grid.component';

describe('ContinentsGridComponent', () => {
  let component: ContinentsGridComponent;
  let fixture: ComponentFixture<ContinentsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinentsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

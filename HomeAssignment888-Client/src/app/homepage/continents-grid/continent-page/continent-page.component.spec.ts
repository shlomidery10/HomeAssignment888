import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentPageComponent } from './continent-page.component';

describe('ContinentPageComponent', () => {
  let component: ContinentPageComponent;
  let fixture: ComponentFixture<ContinentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

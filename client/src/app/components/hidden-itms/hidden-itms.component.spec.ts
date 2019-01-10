import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenItmsComponent } from './hidden-itms.component';

describe('HiddenItmsComponent', () => {
  let component: HiddenItmsComponent;
  let fixture: ComponentFixture<HiddenItmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiddenItmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiddenItmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

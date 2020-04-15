import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbgButtonsComponent } from './fbg-buttons.component';

describe('FbgButtonsComponent', () => {
  let component: FbgButtonsComponent;
  let fixture: ComponentFixture<FbgButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbgButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbgButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

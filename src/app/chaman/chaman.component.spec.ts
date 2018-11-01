import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamanComponent } from './chaman.component';

describe('ChamanComponent', () => {
  let component: ChamanComponent;
  let fixture: ComponentFixture<ChamanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

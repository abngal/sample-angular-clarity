import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClarityMainComponent } from './clarity-main.component';

describe('ClarityMainComponent', () => {
  let component: ClarityMainComponent;
  let fixture: ComponentFixture<ClarityMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClarityMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClarityMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaritySkeletonComponent } from './clarity-skeleton.component';

describe('ClaritySkeletonComponent', () => {
  let component: ClaritySkeletonComponent;
  let fixture: ComponentFixture<ClaritySkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaritySkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaritySkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

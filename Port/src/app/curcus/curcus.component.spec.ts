import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurcusComponent } from './curcus.component';

describe('CurcusComponent', () => {
  let component: CurcusComponent;
  let fixture: ComponentFixture<CurcusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurcusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurcusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

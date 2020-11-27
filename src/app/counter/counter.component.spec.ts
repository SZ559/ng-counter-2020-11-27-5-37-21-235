import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase count when click plus button', () => {
    // given
    component.count = 0;

    // when
    component.increaseCount();

    // then
    expect(component.count).toBe(1);
  });

  it('should decrease count when click minus button', () => {
    // given
    component.count = 0;

    // when
    component.decreaseCount();

    // then
    expect(component.count).toBe(-1);
  });

  it('should return false when count < 0', () => {
    // given
    component.count = -1;

    // when

    // then
    expect(component.isMinusButtonVisible()).toBe(false);
  });

  it('should return true when count >= 0', () => {
    // given
    component.count = 0;

    // when

    // then
    expect(component.isMinusButtonVisible()).toBe(true);
  });
});

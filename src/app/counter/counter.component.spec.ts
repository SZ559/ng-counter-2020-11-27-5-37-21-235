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


  it('should return true when count <= 10', () => {
    // given
    component.count = 10;

    // when

    // then
    expect(component.isPlusButtonVisible()).toBe(true);
  });

  it('should return true when count > 10', () => {
    // given
    component.count = 11;

    // when

    // then
    expect(component.isPlusButtonVisible()).toBe(false);
  });

  it('if the count < 0', () => {
    // given
    component.count = 0;

    // when
    component.decreaseCount();

    // then
    expect(component.backgroundColor).toBe('green');
  });

  it('if the count > 10', () => {
    // given
    component.count = 10;

    // when
    component.increaseCount();

    // then
    expect(component.backgroundColor).toBe('red');
  });

  it('if the count between 0 and 10', () => {
    // given
    component.count = 2;

    // when
    component.decreaseCount();

    // then
    expect(component.backgroundColor).toBe('white');
  });

  it('change background color to white when click reset', () => {
    // given
    component.count = 2;

    // when
    component.resetToZero();

    // then
    expect(component.backgroundColor).toBe('white');
  });

  it('reset count to 0 when click reset button', () => {
    // given
    component.count = 2;

    // when
    component.resetToZero();

    // then
    expect(component.count).toBe(0);
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DanPage } from './dan.page';

describe('DanPage', () => {
  let component: DanPage;
  let fixture: ComponentFixture<DanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MariPage } from './mari.page';

describe('MariPage', () => {
  let component: MariPage;
  let fixture: ComponentFixture<MariPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MariPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

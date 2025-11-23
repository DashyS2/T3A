import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RafaPage } from './rafa.page';

describe('RafaPage', () => {
  let component: RafaPage;
  let fixture: ComponentFixture<RafaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RafaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

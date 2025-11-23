import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnaPage } from './ana.page';

describe('AnaPage', () => {
  let component: AnaPage;
  let fixture: ComponentFixture<AnaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SarahPage } from './sarah.page';

describe('SarahPage', () => {
  let component: SarahPage;
  let fixture: ComponentFixture<SarahPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SarahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

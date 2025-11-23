import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AyslanPage } from './ayslan.page';

describe('AyslanPage', () => {
  let component: AyslanPage;
  let fixture: ComponentFixture<AyslanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AyslanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

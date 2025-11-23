import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GabsPage } from './gabs.page';

describe('GabsPage', () => {
  let component: GabsPage;
  let fixture: ComponentFixture<GabsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SarahrPage } from './sarahr.page';

describe('SarahrPage', () => {
  let component: SarahrPage;
  let fixture: ComponentFixture<SarahrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SarahrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

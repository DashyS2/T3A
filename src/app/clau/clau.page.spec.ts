import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClauPage } from './clau.page';

describe('ClauPage', () => {
  let component: ClauPage;
  let fixture: ComponentFixture<ClauPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

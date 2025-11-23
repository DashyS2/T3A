import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViniPage } from './vini.page';

describe('ViniPage', () => {
  let component: ViniPage;
  let fixture: ComponentFixture<ViniPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

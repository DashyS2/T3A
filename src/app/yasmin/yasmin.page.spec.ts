import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YasminPage } from './yasmin.page';

describe('YasminPage', () => {
  let component: YasminPage;
  let fixture: ComponentFixture<YasminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(YasminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnfermerosPage } from './enfermeros.page';

describe('EnfermerosPage', () => {
  let component: EnfermerosPage;
  let fixture: ComponentFixture<EnfermerosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EnfermerosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

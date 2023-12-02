import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdcitaPage } from './adcita.page';

describe('AdcitaPage', () => {
  let component: AdcitaPage;
  let fixture: ComponentFixture<AdcitaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdcitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

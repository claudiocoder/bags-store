import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerAccesoriesComponent } from './banner-accesories.component';

describe('BannerAccesoriesComponent', () => {
  let component: BannerAccesoriesComponent;
  let fixture: ComponentFixture<BannerAccesoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerAccesoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerAccesoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

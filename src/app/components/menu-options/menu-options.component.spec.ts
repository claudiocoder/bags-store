import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOptiosComponent } from './menu-options.component';

describe('MenuOptiosComponent', () => {
  let component: MenuOptiosComponent;
  let fixture: ComponentFixture<MenuOptiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuOptiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOptiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

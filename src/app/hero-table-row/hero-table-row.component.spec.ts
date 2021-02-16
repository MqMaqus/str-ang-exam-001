import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTableRowComponent } from './hero-table-row.component';

describe('HeroTableRowComponent', () => {
  let component: HeroTableRowComponent;
  let fixture: ComponentFixture<HeroTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroTableRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

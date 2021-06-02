import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesAboutComponent } from './games-about.component';

describe('GamesAboutComponent', () => {
  let component: GamesAboutComponent;
  let fixture: ComponentFixture<GamesAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

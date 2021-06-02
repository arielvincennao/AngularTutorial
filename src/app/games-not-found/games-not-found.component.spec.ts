import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesNotFoundComponent } from './games-not-found.component';

describe('GamesNotFoundComponent', () => {
  let component: GamesNotFoundComponent;
  let fixture: ComponentFixture<GamesNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

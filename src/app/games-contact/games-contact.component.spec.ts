import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesContactComponent } from './games-contact.component';

describe('GamesContactComponent', () => {
  let component: GamesContactComponent;
  let fixture: ComponentFixture<GamesContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

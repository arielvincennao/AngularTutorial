import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesStoreComponent } from './games-store.component';

describe('GamesStoreComponent', () => {
  let component: GamesStoreComponent;
  let fixture: ComponentFixture<GamesStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

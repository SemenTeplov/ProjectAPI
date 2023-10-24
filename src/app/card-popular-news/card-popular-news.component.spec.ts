import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPopularNewsComponent } from './card-popular-news.component';

describe('CardPopularNewsComponent', () => {
  let component: CardPopularNewsComponent;
  let fixture: ComponentFixture<CardPopularNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPopularNewsComponent]
    });
    fixture = TestBed.createComponent(CardPopularNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPopularComponent } from './list-popular.component';

describe('ListPopularComponent', () => {
  let component: ListPopularComponent;
  let fixture: ComponentFixture<ListPopularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPopularComponent]
    });
    fixture = TestBed.createComponent(ListPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

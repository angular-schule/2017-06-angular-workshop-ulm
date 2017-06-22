import { Book } from './../shared/book';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
  });

  it('rating a book should call book.rateUp', () => {

    const book = { rateUp: () => { } } as Book;
    spyOn(book, 'rateUp');

    component.book = book;

    fixture.detectChanges();
    component.rateUp();

    expect(book.rateUp).toHaveBeenCalled();
  });
});

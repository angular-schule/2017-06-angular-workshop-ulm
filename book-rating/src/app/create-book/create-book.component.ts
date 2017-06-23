import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { Book } from '../shared/book';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.less']
})
export class CreateBookComponent  {
  book: Book = Book.empty();

  @Output()
  bookCreated = new EventEmitter<Book>();

  @ViewChild(NgForm)
  form: NgForm;

  add() {
    this.bookCreated.emit(this.book);
    this.book = Book.empty();
    this.form.reset(this.book);
  }
}

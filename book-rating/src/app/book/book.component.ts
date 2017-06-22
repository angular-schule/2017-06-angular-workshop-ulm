import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  test = 0;

  constructor() {

  }


  random() {
    console.log('Change Detection');
    return ++this.test;
  }

  ngOnInit() {

  }

}

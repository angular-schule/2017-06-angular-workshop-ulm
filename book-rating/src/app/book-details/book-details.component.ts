import { Book } from './../shared/book';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  isbn: string;

  kindOf: KindOfBook;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.isbn = params.isbn;
    })

    this.kindOf = {
      isbn: '',
      hallo: 'LOADING'
    }

    // this.isbn = this.route.snapshot.params.isbn;
  }

}

declare type KindOfBook = Partial<Book> & { hallo: 'LOADING' | 'UNLOADING' };

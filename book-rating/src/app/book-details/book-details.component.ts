import { Book } from './../shared/book';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  isbn$: Observable<string>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.isbn$ = this.route.params
      .map(params => params.isbn as string);

  }
}

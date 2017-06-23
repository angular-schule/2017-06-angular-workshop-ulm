import { BookStoreService } from './../shared/book-store.service';
import { AfterViewInit, OnDestroy } from '@angular/core/core';
import { BookComponent } from './../book/book.component';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  books: Book[] = [];

  constructor(private bs: BookStoreService) {
  }

  addBook(book: Book) {
    this.books.push(book);
    this.reorderBooks();
  }

  reorderBooks() {
    this.books.sort((a, b) => b.rating - a.rating);
  }

  ngOnInit() {
    this.bs.getAll()
      .subscribe(books => this.books = books)
  }
}

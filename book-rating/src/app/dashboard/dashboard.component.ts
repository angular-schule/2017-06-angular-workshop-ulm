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
  books: Book[];

  addBook(book: Book) {
    this.books.push(book);
    this.reorderBooks();
  }

  reorderBooks() {
    this.books.sort((a, b) => b.rating - a.rating);
  }

  ngOnInit() {
    this.books = [
      new Book('000', 'Angular', 'Grundlagen, fortgeschrittene Techniken und Best Practices mit TypeScript', 5),
      new Book('111', 'AngularJS 1.x', 'Oldie but Goldie', 3)
    ]
  }
}

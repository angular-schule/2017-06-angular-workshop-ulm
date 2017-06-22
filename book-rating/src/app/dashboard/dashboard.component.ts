import { AfterViewInit, OnDestroy } from '@angular/core/core';
import { BookComponent } from './../book/book.component';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  books: Book[];

  @ViewChild(BookComponent)
  bookComponent: BookComponent;

  subscription: Subscription;

  constructor() {

  }

  ngAfterViewInit() {
    this.subscription = this.bookComponent.rated
      // .filter(b => b.title === 'Angular')
      .map(b => {
        b.title += ' cool';
        return b;
      })
      .subscribe((book: Book) => {
        console.log(book);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  reorderBooks(book: Book) {
    this.books.sort((a, b) => b.rating - a.rating);
  }

  ngOnInit() {
    this.books = [
      new Book('000', 'Angular', 'Grundlagen, fortgeschrittene Techniken und Best Practices mit TypeScript', 5),
      new Book('111', 'AngularJS 1.x', 'Oldie but Goldie', 3)
    ]
  }
}

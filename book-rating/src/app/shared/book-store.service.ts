import { Book } from './book';
import { Http } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BookStoreService {

  constructor(private http: Http,
    @Inject('BACKEND_URL')
    private backendUrl: string) {
      console.log(backendUrl);
    }

  getAll(): Observable<Book[]> {
    return this.http
      .get('https://book-monkey2-api.angular-buch.com/books')
      .map(response => response.json())
      .map(rawBooks => rawBooks
        .map(r => new Book(r.isbn, r.title, r.description, r.rating)))
  }

  delete(isbn: string): Observable<any> {
    return this.http
      .delete('https://book-monkey2-api.angular-buch.com/books');
  }

}

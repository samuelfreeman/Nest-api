import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  private books = [
    { id: 1, title: 'A boy', author: 'Kwame' },
    { id: 2, title: 'A girl', author: 'Kwaku' },
  ];

  getBooks(author?: 'Kwame' | 'Kwaku ') {
    if (author) {
      return this.books.filter((book) => book.author === author);
    }
    return this.books;
  }
}

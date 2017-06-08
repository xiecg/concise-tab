import { Injectable } from '@angular/core';

declare const chrome;

import { list } from './list';

@Injectable()
export class BookmarkService {
  bookmarks: {}[];
  constructor () {}
  formatBookmarks (data): {}[] {
    let list = [];

    const format = (result): any => {
      result.forEach(item => {
        if (item.children) {
          if (item.title) { list.push(item) }
          format(item.children);
        }
      });
    };

    format(data);

    return list;
  }
  getAll () {
    return new Promise((resolve, reject) => {
      // chrome.bookmarks.getTree(result => {
      //   resolve(this.formatBookmarks(result));
      // });
      resolve(this.formatBookmarks(list));
    });
  }
  setBookMarks (bookmarks) {
    this.bookmarks = bookmarks;
  }
  getBookMarks () {
    return this.bookmarks;
  }
}

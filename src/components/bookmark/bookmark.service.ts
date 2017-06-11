import { Injectable } from '@angular/core';

declare const chrome;

import { list } from './list';

interface BookmarkInterface {
  title: string;
  id: string;
}

@Injectable()
export class BookmarkService {
  currentBookMarks: BookmarkInterface[];
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

  setCurrentBookMark (currentBookMarks) {
    this.currentBookMarks = currentBookMarks;
  }
  getCurrentBookMark () {
    return this.currentBookMarks;
  }
  deleteBookMark (id) {
    return chrome.bookmarks.remove(id, () => {
      this.currentBookMarks = this.currentBookMarks.filter(item => item.id !== id);
    });
  }
  updateBookMarkTitle (id, newTitle) {
    chrome.bookmarks.update(id, {
        title: newTitle
    }, () => {
      const item = this.currentBookMarks.filter(item => item.id == id).pop();
      item.title = newTitle;
    });
  }
  hasBookMark (item) {
    return item.length == item.filter(item => !!item.children).length;
  }
}

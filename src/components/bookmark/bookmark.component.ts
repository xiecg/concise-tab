import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})

export class BookmarkComponent {
  bookmarkConfig: {};
  @Output() private outer = new EventEmitter<string>();
  constructor() {}
  ngOnInit () {
    this.bookmarkConfig = {
      name: '书签',
      returnBack: this.returnBack.bind(this),
      type: 'bookmark'
    }
  }
  returnBack () {
    this.outer.emit();
  }
}

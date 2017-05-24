import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})

export class BookmarkComponent {
  @Output() private outer = new EventEmitter<string>();
  constructor() {}
  sendToParent () {
    this.outer.emit('message from child');
  }
}

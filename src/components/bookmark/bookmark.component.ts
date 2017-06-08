import { Component, Output, EventEmitter } from '@angular/core';

import { BookmarkService } from './bookmark.service';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss'],
  animations: [
    trigger('bookmarkState', [
      state('inactive', style({
        transform: 'translateX(0px)'
      })),
      state('active', style({
        transform: 'translateX(-300px)'
      })),
      transition('inactive => active', animate('0.2s ease-out')),
      transition('active => inactive', animate('0.2s ease-in-out'))
    ])
  ]
})

export class BookmarkComponent {
  state: string;
  bookmarkConfig: {};
  @Output() private outer = new EventEmitter<string>();
  constructor(private bookmarkService: BookmarkService) {}
  ngOnInit () {
    this.bookmarkConfig = {
      name: '书签',
      returnBack: this.returnBack.bind(this),
      type: 'bookmark'
    }
    this.bookmarkService.getAll().then(result => {
      console.log('result', result);
      this.bookmarkService.setBookMarks(result);
    });
    this.state = 'inactive';
  }
  onOpenBookMark () {
    this.state = this.state === 'inactive' ? 'active' : 'inactive';
  }
  returnBack () {
    this.outer.emit();
  }
  get bookmarks () {
    return this.bookmarkService.getBookMarks();
  }
}

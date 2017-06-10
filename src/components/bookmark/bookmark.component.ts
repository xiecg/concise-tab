import { Component, Output, EventEmitter, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
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
  hasBookMark: boolean;
  bookmarkChildrenConfig: {
    name: string;
    returnBack: Function;
    type: string;
  };
  @Output() private outer = new EventEmitter<string>();
  constructor(public dialog: MdDialog, private bookmarkService: BookmarkService) {}
  ngOnInit () {
    this.bookmarkConfig = {
      name: '书签',
      returnBack: this.returnBack.bind(this),
      type: 'bookmark'
    }
    this.bookmarkChildrenConfig = {
      name: 'test',
      returnBack: this.returnBackMark.bind(this),
      type: ''
    };
    this.bookmarkService.getAll().then(result => {
      this.bookmarkService.setBookMarks(result);
    });
    this.state = 'inactive';
  }
  returnBackMark () {
    this.trigger();
  }
  onOpenBookMark (item: {
    title: string;
    children: {}[];
  }) {
    this.bookmarkChildrenConfig.name = item.title;
    this.hasBookMark = this.bookmarkService.hasBookMark(item.children);
    this.bookmarkService.setCurrentBookMark(item.children);
    this.trigger();
  }
  onUpdateTitle (id, title) {
    const dialogRef = this.dialog.open(ConfirmBookMarkUpdateNameDialog, {
      data: { id, title }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      const [ id, title ] = result;
      this.bookmarkService.updateBookMarkTitle(id, title);
    });
  }
  onDelete (id) {
    this.bookmarkService.deleteBookMark(id);
  }
  trigger () {
    this.state = this.state === 'inactive' ? 'active' : 'inactive';
  }
  returnBack () {
    this.outer.emit();
  }
  get bookmarks () {
    return this.bookmarkService.getBookMarks();
  }
  get currentBookMarks () {
    return this.bookmarkService.getCurrentBookMark();
  }
}

@Component({
  selector: 'confirm-delete-all-dialog',
  template: `<md-dialog-content>
              <div><input #search (keyup.enter)="onEnterSearch([data.id, search.value])" class="update-name-input" placeholder="给{{ data.title }}重命名"/></div>
            </md-dialog-content>
            <md-dialog-actions>
              <button md-button md-dialog-close>取消</button>
              <button md-button [md-dialog-close]="[data.id, search.value]">确认</button>
            </md-dialog-actions>
            `,
  styles: [' .update-name-input { border: 0; outline: none; padding: 10px 0; } ']
})
export class ConfirmBookMarkUpdateNameDialog {
  placeholder: string;
  constructor(public dialogRef: MdDialogRef<ConfirmBookMarkUpdateNameDialog>, @Inject(MD_DIALOG_DATA) public data: any) {}
  onEnterSearch (result) {
    this.dialogRef.close(result);
  }
}

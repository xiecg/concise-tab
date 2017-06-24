import { Component, Output, EventEmitter, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { BookmarkService } from './bookmark.service';

import { ConfigService } from '../../service';

interface BookmarkInterface {
  title: string;
  id: string;
  children?: {}[];
}

@Component({
  selector: 'bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
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
  constructor(public dialog: MdDialog, private bookmarkService: BookmarkService, private configService: ConfigService) {}
  ngOnInit () {
    this.bookmarkConfig = {
      name: 'Bookmarks',
      returnBack: this.returnBack.bind(this),
      type: 'bookmarks',
      skipName: 'Bookmark manager',
    }
    this.bookmarkService.getAll().then(result => {
      this.bookmarkService.setBookMarks(result);
      this.onOpenBookMark(result[0]);
    });
    this.state = 'inactive';
  }
  onOpenBookMark (item: {
    title: string;
    children: {}[];
  }) {
    this.hasBookMark = this.bookmarkService.hasBookMark(item.children);
    this.bookmarkService.setCurrentBookMark(item.children);
  }
  onUpdateTitle (id, title) {
    const dialogRef = this.dialog.open(ConfirmBookMarkUpdateNameDialog, {
      width: '300px',
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
  returnBack () {
    this.outer.emit();
  }
  onEnterSearch (value) {
    if (!value) return;
    this.bookmarkService.searchBookMarks(value).then(result => {
      this.bookmarkService.currentBookMarks = result;
    });
  }
  onKeyup (value) {
    if (value == '') {
      const item: any = this.bookmarks[0];
      this.onOpenBookMark(item);
    }
  }
  get bookmarks (): BookmarkInterface[] {
    return this.bookmarkService.getBookMarks();
  }
  get currentBookMarks () {
    return this.bookmarkService.getCurrentBookMark();
  }
}

@Component({
  selector: 'confirm-delete-all-dialog',
  template: `<md-dialog-content>
              <div><input #search (keyup.enter)="onEnterUpdateName([data.id, search.value])" class="update-name-input" [(ngModel)]="data.title"  placeholder="Rename the {{ data.title }}"/></div>
            </md-dialog-content>
            <md-dialog-actions class="update-name-actions">
              <button md-button md-dialog-close>cancel</button>
              <button md-button [md-dialog-close]="[data.id, search.value]">ok</button>
            </md-dialog-actions>
            `,
  styles: [' .update-name-input { width: 100%; border: 0; outline: none; padding: 10px 0; } .update-name-actions { display: flex; justify-content: center; } ']
})
export class ConfirmBookMarkUpdateNameDialog {
  placeholder: string;
  constructor(public dialogRef: MdDialogRef<ConfirmBookMarkUpdateNameDialog>, @Inject(MD_DIALOG_DATA) public data: any) {}
  onEnterUpdateName (result) {
    this.dialogRef.close(result);
  }
}

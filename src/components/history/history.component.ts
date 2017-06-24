import { Component, Output, EventEmitter } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { HistoryService } from './history.service';

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  historyConfig: {};
  @Output() private outer = new EventEmitter<string>();
  constructor(public dialog: MdDialog, public snackBar: MdSnackBar, private historyService: HistoryService) {}
  ngOnInit () {
    this.historyConfig = {
      name: 'historys',
      returnBack: this.returnBack.bind(this),
      type: 'history',
      skipName: 'historys',
      menuItmes: [{
        name: 'Delete all records',
        fn: this.onDeleteAll.bind(this)
      }]
    }
    this.historyService.getAll().then(result => {
      this.historyService.setHistorys(result);
    });
  }
  onEnterSearch (value: string) {
    this.historyService.searchHistory(value.trim()).then(result => {
      this.historyService.setHistorys(result);
    });
  }
  onOpen (item: { url: string; }) {
    location.href = item.url;
  }
  onDelete (item: { id: string, url: string; }) {
    this.historyService.deleteHistory(item.id, item.url);
  }
  onDeleteAll () {
    const dialogRef = this.dialog.open(ConfirmDeleteAllDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      this.historyService.deleteAllHistory().then(() => {
        this.snackBar.open('successfully deleted.', undefined, { duration: 1000 });
      });
    });
  }
  returnBack () {
    this.outer.emit();
  }
  get historys () {
    return this.historyService.getHistorys();
  }
}

@Component({
  selector: 'confirm-delete-all-dialog',
  template: `<md-dialog-content>
              <div>Delete all history ?</div>
            </md-dialog-content>
            <md-dialog-actions>
              <button md-button md-dialog-close>cancel</button>
              <button md-button [md-dialog-close]="true">ok</button>
            </md-dialog-actions>
            `,
})
export class ConfirmDeleteAllDialog {
  constructor(public dialogRef: MdDialogRef<ConfirmDeleteAllDialog>) {}
  confirm () {
    console.log(this.dialogRef)
  }
}

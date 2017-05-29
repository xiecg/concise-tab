import { Component, Output, EventEmitter } from '@angular/core';

import { ManagementService } from '../../service';

declare const chrome;

@Component({
  selector: 'apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})

export class AppsComponent {
  apps: object[];
  @Output() private outer = new EventEmitter<string>();
  constructor(private management: ManagementService) {}
  ngOnInit (): void {
    this.management.getExtend().then(result => {
      console.log(result);
      this.apps = result;
    })
  }
  sendToParent (): void {
    this.outer.emit('message from child');
  }
  onSetState (item: object): void {
    console.log(item)
    chrome.management.setEnabled();
  }
  onDelete (item: object): void {

  }
}

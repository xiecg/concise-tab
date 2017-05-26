import { Component, Output, EventEmitter } from '@angular/core';

import { ManagementService } from '../../service';

@Component({
  selector: 'apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})

export class AppsComponent {
  apps: object[];
  @Output() private outer = new EventEmitter<string>();
  constructor(private management: ManagementService) {}
  ngOnInit () {
    this.management.getExtend().then(result => {
      console.log(result);
      this.apps = result;
    })
  }
  sendToParent () {
    this.outer.emit('message from child');
  }
}

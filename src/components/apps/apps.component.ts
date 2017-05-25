import { Component, Output, EventEmitter } from '@angular/core';

import { ManagementService } from '../../service';

@Component({
  selector: 'apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})

export class AppsComponent {
  @Output() private outer = new EventEmitter<string>();
  constructor(private management: ManagementService) {}
  ngOnInit () {

  }
  sendToParent () {
    this.outer.emit('message from child');
  }
}

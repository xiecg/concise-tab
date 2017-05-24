import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})

export class AppsComponent {
  @Output() private outer = new EventEmitter<string>();
  constructor() {}
  sendToParent () {
    this.outer.emit('message from child');
  }
}

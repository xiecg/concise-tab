import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'return-header',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.scss']
})

export class ReturnComponent {
  @Input() private config: {
    name: string;
    sendToParent: Function;
  };
  // @Output() private outer = new EventEmitter<string>();
  constructor() {}
  sendToParent () {
    // this.outer.emit();
    this.config.sendToParent();
  }
}

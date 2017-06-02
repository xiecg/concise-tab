import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})

export class HistoryComponent {
  historyConfig: {};
  @Output() private outer = new EventEmitter<string>();
  constructor() {}
  ngOnInit () {
    this.historyConfig = {
      name: '历史记录',
      returnBack: this.returnBack.bind(this),
      type: 'history'
    }
  }
  returnBack () {
    this.outer.emit();
  }
}

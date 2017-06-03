import { Component, Output, EventEmitter } from '@angular/core';

import { HistoryService } from './history.service';

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})

export class HistoryComponent {
  historyConfig: {};
  @Output() private outer = new EventEmitter<string>();
  constructor(private historyService: HistoryService) {}
  ngOnInit () {
    this.historyConfig = {
      name: '历史记录',
      returnBack: this.returnBack.bind(this),
      type: 'history'
    }
    this.historyService.getAll().then(result => {
      console.log(result);
      this.historyService.setHistorys(result);
    });
  }
  onOpen (item: { url: string; }) {
    location.href = item.url;
  }
  onDelete (id: string) {
    this.historyService.deleteHistory(id);
  }
  returnBack () {
    this.outer.emit();
  }
  get historys () {
    return this.historyService.getHistorys();
  }
}

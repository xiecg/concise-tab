import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ConfigService } from '../../service';

declare const chrome;

@Component({
  selector: 'return-header',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.scss']
})

export class ReturnComponent {
  menuItmes: {}[];
  @Input() config: {
    name: string;
    returnBack: Function;
    type: string;
    menuItmes: {}[];
  };
  setIndexState: boolean;
  constructor(private configService: ConfigService) {}
  ngOnInit () {
    const typeActive = localStorage.getItem('typeActive');
    this.setIndexState = typeActive === this.config.type;
    this.menuItmes = this.config.menuItmes;
  }
  returnBack () {
    this.config.returnBack();
  }
  setIndex () {
    if (this.setIndexState) {
      localStorage.removeItem('typeActive');
    } else {
      localStorage.setItem('typeActive', this.config.type);
    }
    this.setIndexState = !this.setIndexState;
  }
  skip () {
    chrome.tabs.getCurrent(item => {
      chrome.tabs.update(item.id, {
        url: `chrome://${ this.config.type }/`
      })
    })
  }
}

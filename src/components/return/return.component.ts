import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { MdMenuTrigger } from '@angular/material';

@Component({
  selector: 'return-header',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.scss']
})

export class ReturnComponent {
  _menuOpen: any;
  menuItmes: {}[];
  @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;
  @Output() onMenuOpen = new EventEmitter<void>();
  @Output() onMenuClose = new EventEmitter<void>();
  @Input() config: {
    name: string;
    returnBack: Function;
    type: string;
    menuItmes: {}[];
  };
  setIndexState: boolean;
  constructor() {}
  ngOnInit () {
    const typeActive = localStorage.getItem('typeActive');
    this.setIndexState = typeActive === this.config.type;
    this.menuItmes = this.config.menuItmes;
    this.onMenuOpen.subscribe(() => {
      console.log('onMenuOpen');
    });
  }
  receive (event) {
    console.log('receive', event);
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
}

import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { ManagementService } from '../../service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
      trigger('menuState', [
        state('inactive', style({
          transform: 'translateX(0px)'
        })),
        state('active', style({
          transform: 'translateX(-300px)'
        })),
        transition('inactive => active', animate('0.2s ease-out')),
        transition('active => inactive', animate('0.2s ease-in-out'))
      ]),
      trigger('menuSize', [
        state('small', style({
          width: '300px',
          height: '300px'
        })),
        state('big', style({
          width: '600px',
          height: '600px'
        })),
        transition('small => big', animate('0.2s ease-out')),
        transition('big => big', animate('0.2s ease-in-out'))
      ])
    ]
})

export class MenuComponent {
  size: string;
  state: string;
  typeActive: string;
  menus: {
    [index: number]: object;
  };
  constructor() {}
  ngOnInit () {
    const typeActive = localStorage.getItem('typeActive');
    this.state = typeActive ? 'active' : 'inactive';
    this.typeActive = typeActive;
    this.menus = [{
      icon: 'icon-bookmark',
      name: '书签',
      type: 'bookmark'
    },{
      icon: 'icon-apps',
      name: '应用程序',
      type: 'apps'
    },{
      icon: 'icon-extend',
      name: '扩展程序',
      type: 'extends'
    },{
      icon: 'icon-history',
      name: '历史记录',
      type: 'history'
    },{
      icon: 'icon-download',
      name: '下载',
      type: 'download'
    }];
  }
  onOpenMenu (type) {
    if (type === 'history') {
      this.size = 'big';
    }
    this.typeActive = type;
    this.trigger();
  }
  receive (event: object) {
    this.size = 'small';
    this.trigger();
  }
  trigger () {
    this.state = this.state === 'inactive' ? 'active' : 'inactive';
  }
}

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
      ])
    ]
})

export class MenuComponent {
  private state: string;
  private entryActive: boolean;
  private typeActive: string;
  private menus: {
    [index: number]: object;
  };
  constructor(private management: ManagementService) {}
  ngOnInit () {
    this.state = 'inactive';
    this.entryActive = true;
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
      type: 'extend'
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
    this.typeActive = type;
    this.trigger();
  }
  receive () {
    this.trigger();
  }
  trigger () {
    this.state = this.state === 'inactive' ? 'active' : 'inactive';
    this.entryActive = this.entryActive ? false : true;
  }
}

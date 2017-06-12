import { Injectable } from '@angular/core';


@Injectable()
export class ConfigService {
  size: string;
  menus: {
    [index: number]: object;
  };
  bigs: string[];
  visible: string;
  hasMenuVisible: boolean;
  currentPhoto: string;
  constructor () {
    const typeActive = localStorage.getItem('typeActive');

    this.bigs = ['bookmark', 'history'];
    this.size = this.bigs.includes(typeActive) ? 'big' : 'small';
    this.visible = 'close';

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
    }];
    // {
    //   icon: 'icon-download',
    //   name: '下载',
    //   type: 'download'
    // }
  }
  setSize (size: string) {
    this.size = size ? size : (this.size === 'small') ? 'big' : 'small';
  }
  setVisible (visible) {
    this.visible = visible;
  }
}

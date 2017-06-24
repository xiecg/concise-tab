import { Injectable } from '@angular/core';


@Injectable()
export class ConfigService {
  size: string;
  menus: {
    [index: number]: object;
  };
  bigs: string[];
  menuVisible: string;
  menuTime: any;
  hasMenuVisible: boolean;
  currentPhoto: string;
  searchVisible: string;
  searchTime: any;
  constructor () {
    const typeActive = localStorage.getItem('typeActive');

    this.bigs = ['bookmarks', 'history'];
    this.size = this.bigs.includes(typeActive) ? 'big' : 'small';
    this.menuVisible = 'close';

    this.menus = [{
      icon: 'icon-bookmark',
      name: 'bookmark',
      type: 'bookmarks'
    },{
      icon: 'icon-apps',
      name: 'apps',
      type: 'apps'
    },{
      icon: 'icon-extend',
      name: 'extensions',
      type: 'extensions'
    },{
      icon: 'icon-history',
      name: 'history',
      type: 'history'
    }];
  }
  setSize (size: string) {
    this.size = size ? size : (this.size === 'small') ? 'big' : 'small';
  }
  setMenuVisible (visible) {
    this.menuVisible = visible;
    /*
    if (visible === 'open') {
      this.menuTime = setTimeout(() => {
        this.setMenuVisible('close');
      }, 1000 * 60);
    } else {
      clearTimeout(this.menuTime);
    }
    */
  }
  setSearchVisible (visible) {
    this.searchVisible = visible;
    /*
    if (visible === 'open') {
      this.searchTime = setTimeout(() => {
        this.setSearchVisible('close');
      }, 1000 * 60);
    } else {
      clearTimeout(this.searchTime);
    }
    */
  }
}

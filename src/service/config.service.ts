import { Injectable } from '@angular/core';


@Injectable()
export class ConfigService {
  size: string;
  menus: {
    [index: number]: object;
  };
  bigs: string[];
  isRandomPhoto: boolean;
  menuVisible: string;
  menuTime: any;
  hasMenuVisible: boolean;
  currentPhoto: string;
  searchTime: any;
  constructor () {
    const typeActive = localStorage.getItem('typeActive');
    const isRandomPhoto = localStorage.getItem('isRandomPhoto');

    this.bigs = ['bookmarks', 'history'];
    this.size = this.bigs.includes(typeActive) ? 'big' : 'small';
    this.menuVisible = 'close';
    this.isRandomPhoto = isRandomPhoto == null;

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
  }
  setRandomPhoto (bool) {
    this.isRandomPhoto = bool;
  }
}

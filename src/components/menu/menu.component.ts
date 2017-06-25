import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

declare const chrome;

import { ConfigService } from '../../service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
      trigger('menuVisible', [
        state('open', style({
          opacity: '1',
          transform: 'scale(1)'
        })),
        state('close', style({
          opacity: '0',
          transform: 'scale(0)'
        })),
        transition('open => close', animate('0.2s ease-out')),
        transition('close => open', animate('0.2s ease-in-out'))
      ]),
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
  state: string;
  typeActive: string;
  constructor(private configService: ConfigService) {}
  ngOnInit () {
    const typeActive = localStorage.getItem('typeActive');
    this.state = typeActive ? 'active' : 'inactive';
    this.typeActive = typeActive;
  }
  onVisible (visible: string) {
    this.configService.setMenuVisible(visible);
  }
  onOpenMenu (type) {
    if (this.configService.bigs.includes(type)) {
      this.configService.setSize('big');
    }
    this.typeActive = type;
    this.trigger();
  }
  onDownloadPhoto () {
    chrome.tabs.getCurrent(item => {
      chrome.tabs.update(item.id, {
        url: this.configService.currentPhoto
      })
    })
  }
  receive (event: object) {
    this.configService.setSize('small');
    this.trigger();
  }
  trigger () {
    this.state = this.state === 'inactive' ? 'active' : 'inactive';
  }
  get size () {
    return this.configService.size;
  }
  get menus () {
    return this.configService.menus;
  }
  get visible () {
    return this.configService.menuVisible;
  }
}

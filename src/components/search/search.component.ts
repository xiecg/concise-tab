import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MdAutocomplete } from '@angular/material';
import { SearchService } from './search.service';

import { ConfigService } from '../../service';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [
    trigger('visible', [
      state('open', style({
        opacity: '1',
      })),
      state('close', style({
        opacity: '0',
      })),
      transition('open => close', animate('0.2s')),
      transition('close => open', animate('0.2s'))
    ])
  ]
})
export class SearchComponent {
  @ViewChild('searchInput') input: ElementRef;
  height: number;
  stateCtrl: FormControl;
  value: string;
  time: any;
  constructor(private searchService: SearchService, private configService: ConfigService, private renderer: Renderer) {
    this.stateCtrl = new FormControl();
    this.stateCtrl.valueChanges.subscribe(this.onKeyup.bind(this));
  }
  ngOnInit () {
    this.configService.setSearchVisible('close');
  }
  onKeyup (value) {
    this.configService.setMenuVisible('close');
    if (!value) {
      this.searchService.setAntistop([]);
      return;
    }
    this.searchService.getSearchAntistops(value).then(result => {
      if (this.value && this.configService.menuVisible === 'close') {
        this.height = result.length * 48;
        this.searchService.setAntistop(result);
      } else {
        this.searchService.setAntistop([]);
      }
    });
  }
  onEnterSearch (value) {
    location.href = `https://www.google.com/search?q=${ value }`;
  }
  onVisible (visible: string) {
    clearTimeout(this.time);
    this.configService.setSearchVisible(visible);
    if (this.configService.menuVisible === 'close') {
      this.renderer.invokeElementMethod(this.input.nativeElement, 'focus');
    }
  }
  onHide () {
    clearTimeout(this.time);
    this.time = setTimeout(() => {
      if (!this.value) {
        this.configService.setSearchVisible('close');
        this.renderer.invokeElementMethod(this.input.nativeElement, 'blur');
      }
    }, 1500);
  }
  get antistop () {
    return this.searchService.antistop;
  }
  get visible () {
    return this.configService.searchVisible;
  }
}

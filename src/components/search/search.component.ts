import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MdAutocomplete } from '@angular/material';
import { SearchService } from './search.service';

import { ConfigService } from '../../service';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
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
  ngOnInit () {}
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
  get antistop () {
    return this.searchService.antistop;
  }
}

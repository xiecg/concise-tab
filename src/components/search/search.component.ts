import { Component } from '@angular/core';

import { FormControl } from '@angular/forms';
import { MdAutocomplete } from '@angular/material';
import { SearchService } from './search.service';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  height: number;
  stateCtrl: FormControl;
  constructor(private searchService: SearchService) {
    this.stateCtrl = new FormControl();
    this.stateCtrl.valueChanges.subscribe(this.onKeyup.bind(this));
  }
  onKeyup (value) {
    this.searchService.getSearchAntistops(value).then(result => {
      this.height = result.length * 48;
      this.searchService.setAntistop(result);
    })
  }
  onEnterSearch (value) {
    console.log('value', value)
    location.href = `https://www.google.com/search?q=${ value }`;
  }
  get antistop () {
    return this.searchService.antistop;
  }
}

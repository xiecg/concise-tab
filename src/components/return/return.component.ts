import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'return-header',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.scss']
})

export class ReturnComponent {
  @Input() private config: {
    name: string;
    returnBack: Function;
    type: string;
  };
  setIndexState: boolean;
  // @Output() private outer = new EventEmitter<string>();
  constructor() {}
  ngOnInit () {
    const typeActive = localStorage.getItem('typeActive');
    this.setIndexState = typeActive === this.config.type;
  }
  returnBack () {
    // this.outer.emit();
    this.config.returnBack();
  }
  setIndex (): void {
    if (this.setIndexState) {
      localStorage.removeItem('typeActive');
    } else {
      localStorage.setItem('typeActive', this.config.type);
    }
    this.setIndexState = !this.setIndexState;
  }
}

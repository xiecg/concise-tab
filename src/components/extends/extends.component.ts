import { Component, Output, EventEmitter } from '@angular/core';

import { ManagementService } from '../../service';

import { ExtendsService } from './extends.service';

@Component({
  selector: 'extends',
  templateUrl: './extends.component.html',
  styleUrls: ['./extends.component.scss']
})

export class ExtendsComponent {
  extendsConfig: {};
  @Output() private outer = new EventEmitter<string>();
  constructor(private management: ManagementService, private extendsService: ExtendsService) {}
  ngOnInit (): void {
    this.management.getExtend().then(result => {
      this.extendsService.setExtends(result);
    });
    this.extendsConfig = {
      name: '扩展程序',
      returnBack: this.returnBack.bind(this),
      type: 'extensions',
      skipName: '扩展程序'
    };
  }
  returnBack (): void {
    this.outer.emit();
  }
  onSetState (id: string): void {
    this.extendsService.setExtendState(id);
  }
  onUnInstall (id: string): void {
    this.extendsService.unInstall(id);
  }
  get extends () {
    return this.extendsService.getExtends();
  }
}

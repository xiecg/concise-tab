import { Component, Output, EventEmitter } from '@angular/core';

import { ManagementService } from '../../service';

import { ExtendsService } from './extends.service';

@Component({
  selector: 'extends',
  templateUrl: './extends.component.html',
  styleUrls: ['./extends.component.scss']
})

export class ExtendsComponent {
  @Output() private outer = new EventEmitter<string>();
  constructor(private management: ManagementService, private extendsService: ExtendsService) {}
  ngOnInit (): void {
    this.management.getExtend().then(result => {
      this.extendsService.setExtends(result);
    });
  }
  sendToParent (): void {
    this.outer.emit();
  }
  onSetState (id: string): void {
    this.extendsService.setExtendState(id);
  }
  onUnInstall (id: string): void {
    this.extendsService.unInstall(id);
  }
  get apps () {
    return this.extendsService.getExtends();
  }
}

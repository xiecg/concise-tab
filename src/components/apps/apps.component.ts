import { Component, Output, EventEmitter } from '@angular/core';

import { ManagementService } from '../../service';

import { AppsService } from './apps.service';

interface AppsInterface {
  id: string;
  enabled: boolean;
}

@Component({
  selector: 'apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})

export class AppsComponent {
  @Output() private outer = new EventEmitter<string>();
  constructor(private management: ManagementService, private appsService: AppsService) {}
  ngOnInit (): void {
    this.management.getExtend().then(result => {
      this.appsService.setApps(result);
    });
  }
  sendToParent (): void {
    this.outer.emit('message from child');
  }
  onSetState (id: string): void {
    this.appsService.setAppState(id);
  }
  onDelete (item: object): void {}
  get apps () {
    return this.appsService.getApps();
  }
}

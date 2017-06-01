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
  appsConfig: {};
  @Output() private outer = new EventEmitter<string>();
  constructor(private management: ManagementService, private appsService: AppsService) {}
  ngOnInit (): void {
    this.management.getApps().then(result => {
      this.appsService.setApps(result);
    });
    this.appsConfig = {
      name: '应用程序',
      returnBack: this.returnBack.bind(this),
      type: 'apps'
    };
  }
  returnBack (): void {
    this.outer.emit();
  }
  onSetState (id: string): void {
    this.appsService.setAppState(id);
  }
  onUnInstall (id: string): void {
    this.appsService.unInstall(id);
  }
  get apps () {
    return this.appsService.getApps();
  }
}

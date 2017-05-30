import { Injectable } from '@angular/core';

declare const chrome;

interface AppsInterface {
  id: string;
  enabled: boolean;
}

@Injectable()
export class AppsService {
  apps: AppsInterface[];
  constructor () {}
  getApps (): AppsInterface[] {
    return this.apps;
  }
  setApps (apps: AppsInterface[]): void {
    this.apps = apps;
  }
  getApp (id: string): AppsInterface {
    return this.apps.filter(item => item.id == id).pop();
  }
  setAppState (id: string): void {
    let app: AppsInterface = this.getApp(id);
    Object.assign(app, {
      enabled: !app.enabled
    });
    chrome.management.setEnabled(id, app.enabled);
  }
}

import { Injectable } from '@angular/core';

declare const chrome;

interface ExtendStateInterface {
  id: string;
  enabled: boolean;
}

@Injectable()
export class ExtendsService {
  extends: ExtendStateInterface[];
  constructor () {}
  getExtends (): ExtendStateInterface[] {
    return this.extends;
  }
  setExtends (apps: ExtendStateInterface[]): void {
    this.extends = apps;
  }
  getsetExtend (id: string): ExtendStateInterface {
    return this.extends.filter(item => item.id == id).pop();
  }
  setExtendState (id: string): void {
    let app: ExtendStateInterface = this.getsetExtend(id);
    Object.assign(app, {
      enabled: !app.enabled
    });
    chrome.management.setEnabled(id, app.enabled);
  }
  unInstall (id: string): void {
    chrome.management.uninstall(id);
  }
}

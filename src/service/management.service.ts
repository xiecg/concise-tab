import { Injectable } from '@angular/core';

declare const chrome;

// import { data } from './data';

interface AppsInterface {
  id: string;
  enabled: boolean;
}

@Injectable()
export class ManagementService {
  private management: object[];
  constructor () {}
  private getAll (): Promise<[object]> {
    return new Promise((resolve, reject) => {
      // resolve(data);
      chrome.management.getAll(result => {
        resolve(result);
      });
    });
  }
  private getManagement (type: string): Promise<[{}]> {
    const isApp = type === 'app' ? true : false;
    return this.getAll().then(resutl => {
      const apps = resutl.filter((item: {
        isApp: boolean;
      }) => {
        return item.isApp === isApp;
      });
      return apps;
    });
  }
  getApps (): Promise<[AppsInterface]> {
    return this.getManagement('app');
  }
  getExtend (): Promise<[AppsInterface]> {
    return this.getManagement('extend');
  }
}

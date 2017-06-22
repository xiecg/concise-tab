import { Injectable } from '@angular/core';

declare const chrome;

const managementArray: Array<object> = [{"appLaunchUrl":"","availableLaunchTypes":["OPEN_AS_WINDOW"],"description":"A performance monitor to show cpu and memory status.","enabled":true,"homepageUrl":"","hostPermissions":[],"icons":[{"size":16,"url":"chrome://extension-icon/mjifdbjloilaokolggneeolhlniegmla/16/0"},{"size":48,"url":"chrome://extension-icon/mjifdbjloilaokolggneeolhlniegmla/48/0"},{"size":128,"url":"chrome://extension-icon/mjifdbjloilaokolggneeolhlniegmla/128/0"}],"id":"mjifdbjloilaokolggneeolhlniegmla","installType":"development","isApp":true,"launchType":"OPEN_AS_WINDOW","mayDisable":true,"name":"Performance Monitor","offlineEnabled":true,"optionsUrl":"","permissions":["system.cpu","system.memory"],"shortName":"Performance Monitor","type":"packaged_app","version":"1.0"},{"description":"contracted tab","enabled":true,"homepageUrl":"","hostPermissions":[],"icons":[{"size":16,"url":"chrome://extension-icon/obghbnmajjbgfhbokbgaiegddgaanjfg/16/0"},{"size":48,"url":"chrome://extension-icon/obghbnmajjbgfhbokbgaiegddgaanjfg/48/0"},{"size":128,"url":"chrome://extension-icon/obghbnmajjbgfhbokbgaiegddgaanjfg/128/0"}],"id":"obghbnmajjbgfhbokbgaiegddgaanjfg","installType":"development","isApp":false,"mayDisable":true,"name":"unsplash-tab","offlineEnabled":false,"optionsUrl":"","permissions":["bookmarks","management"],"shortName":"unsplash-tab","type":"extension","version":"1.0"},{"description":"Translate what you select with Google","disabledReason":"unknown","enabled":false,"homepageUrl":"","hostPermissions":[],"icons":[{"size":16,"url":"chrome://extension-icon/bhcbjipegljdjlegljbdcjbnmooocbaf/16/0"}],"id":"bhcbjipegljdjlegljbdcjbnmooocbaf","installType":"development","isApp":false,"mayDisable":true,"name":"Google Translate","offlineEnabled":false,"optionsUrl":"","permissions":["contextMenus"],"shortName":"Google Translate","type":"extension","version":"1.0"},{"description":"扩展内部通信Demo","disabledReason":"unknown","enabled":false,"homepageUrl":"","hostPermissions":[],"id":"flanodibbobpnjmiamhehfnoopdfclaj","installType":"development","isApp":false,"mayDisable":true,"name":"扩展内部通信Demo","offlineEnabled":false,"optionsUrl":"","permissions":[],"shortName":"扩展内部通信Demo","type":"extension","version":"1.0"},{"description":"Save all images in current tab","disabledReason":"unknown","enabled":false,"homepageUrl":"","hostPermissions":[],"id":"hcjhemcbfknaihoalfmafppbpdgnnngh","installType":"development","isApp":false,"mayDisable":true,"name":"Save all images","offlineEnabled":false,"optionsUrl":"","permissions":["activeTab","contextMenus","downloads","downloadsInternal"],"shortName":"Save all images","type":"extension","version":"1.0"},{"description":"查看未来两周的天气情况","disabledReason":"unknown","enabled":false,"homepageUrl":"","hostPermissions":["http://api.openweathermap.org/*"],"icons":[{"size":16,"url":"chrome://extension-icon/hfhoninblpfhminnfbkenmjaafeihong/16/0"},{"size":48,"url":"chrome://extension-icon/hfhoninblpfhminnfbkenmjaafeihong/48/0"},{"size":128,"url":"chrome://extension-icon/hfhoninblpfhminnfbkenmjaafeihong/128/0"}],"id":"hfhoninblpfhminnfbkenmjaafeihong","installType":"development","isApp":false,"mayDisable":true,"name":"天气预报","offlineEnabled":false,"optionsUrl":"chrome-extension://hfhoninblpfhminnfbkenmjaafeihong/options.html","permissions":[],"shortName":"天气预报","type":"extension","version":"1.0"},{"description":"查询美元当日价格","disabledReason":"unknown","enabled":false,"homepageUrl":"","hostPermissions":["*://query.yahooapis.com/*"],"icons":[{"size":16,"url":"chrome://extension-icon/homamdelmpfkgamdgdneolmajhfobabb/16/0"}],"id":"homamdelmpfkgamdgdneolmajhfobabb","installType":"development","isApp":false,"mayDisable":true,"name":"USD Price","offlineEnabled":false,"optionsUrl":"","permissions":[],"shortName":"USD Price","type":"extension","version":"1.0"},{"description":"让你永远也点击不到Google的搜索按钮","disabledReason":"unknown","enabled":false,"homepageUrl":"","hostPermissions":[],"id":"jegekhnmfhijlalocnmghlhanoflnckh","installType":"development","isApp":false,"mayDisable":true,"name":"永远点不到的搜索按钮","offlineEnabled":false,"optionsUrl":"","permissions":[],"shortName":"永远点不到的搜索按钮","type":"extension","version":"1.0"},{"description":"Turtle","disabledReason":"unknown","enabled":false,"homepageUrl":"","hostPermissions":[],"id":"kolpkfbbkaigefdkhccmncoalccbdaeo","installType":"development","isApp":false,"mayDisable":true,"name":"Turtle","offlineEnabled":false,"optionsUrl":"","permissions":[],"shortName":"Turtle","type":"extension","version":"1.0"},{"description":"监视Google是否在线","disabledReason":"unknown","enabled":false,"homepageUrl":"","hostPermissions":["https://www.google.co.jp/*"],"icons":[{"size":16,"url":"chrome://extension-icon/lhifjdpclidmppmadgnhalooibhcgcnj/16/0"},{"size":48,"url":"chrome://extension-icon/lhifjdpclidmppmadgnhalooibhcgcnj/48/0"},{"size":128,"url":"chrome://extension-icon/lhifjdpclidmppmadgnhalooibhcgcnj/128/0"}],"id":"lhifjdpclidmppmadgnhalooibhcgcnj","installType":"development","isApp":false,"mayDisable":true,"name":"Google在线状态","offlineEnabled":false,"optionsUrl":"","permissions":[],"shortName":"Google在线状态","type":"extension","version":"1.0"},{"description":"我的第一个Chrome扩展","disabledReason":"unknown","enabled":false,"homepageUrl":"","hostPermissions":[],"icons":[{"size":16,"url":"chrome://extension-icon/nffiddhlkehojmaojdnmgpoiingnjhel/16/0"},{"size":48,"url":"chrome://extension-icon/nffiddhlkehojmaojdnmgpoiingnjhel/48/0"},{"size":128,"url":"chrome://extension-icon/nffiddhlkehojmaojdnmgpoiingnjhel/128/0"}],"id":"nffiddhlkehojmaojdnmgpoiingnjhel","installType":"development","isApp":false,"mayDisable":true,"name":"我的时钟","offlineEnabled":false,"optionsUrl":"","permissions":[],"shortName":"我的时钟","type":"extension","version":"1.0"},{"description":"查看我的电脑当前的公网IP","disabledReason":"unknown","enabled":false,"homepageUrl":"","hostPermissions":["http://baidu.com/*"],"icons":[{"size":16,"url":"chrome://extension-icon/nliikefnjkgkgmannjicfhdhklamkool/16/0"},{"size":48,"url":"chrome://extension-icon/nliikefnjkgkgmannjicfhdhklamkool/48/0"},{"size":128,"url":"chrome://extension-icon/nliikefnjkgkgmannjicfhdhklamkool/128/0"}],"id":"nliikefnjkgkgmannjicfhdhklamkool","installType":"development","isApp":false,"mayDisable":true,"name":"查看我的IP","offlineEnabled":false,"optionsUrl":"","permissions":[],"shortName":"查看我的IP","type":"extension","version":"1.0"}];

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
      // resolve(managementArray);
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

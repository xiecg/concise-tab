import { Injectable } from '@angular/core';

declare const chrome;

// import { data } from './data';

interface HistoryInterface {
  id: string;
}

@Injectable()
export class HistoryService {
  historys: HistoryInterface[];
  constructor () {}
  getAll (): Promise<[HistoryInterface]> {
    return new Promise((resolve, reject) => {
      // resolve(data);
      chrome.history.search({
        text: '',
        startTime: new Date().getTime()-(24 * 30)*3600*1000,
        endTime: new Date().getTime(),
        maxResults: 999999
      }, (result) => {
        resolve(result);
      });
    });
  }
  searchHistory (value: string): Promise<HistoryInterface[]> {
    return new Promise((resolve, reject) => {
      chrome.history.search({
        text: value,
        startTime: new Date().getTime() - (24 * 7) * 3600 * 1000,
        endTime: new Date().getTime(),
        maxResults: 999999
      }, (result) => {
        resolve(result);
      });
    });
  }
  setHistorys (historys: HistoryInterface[]): HistoryService {
    this.historys = historys;
    return this;
  }
  getHistorys (): HistoryInterface[] {
    return this.historys;
  }
  getHistory (id: string) {
    return this.historys.filter(item => item.id).pop();
  }
  deleteHistory (id: string, url: string): HistoryService {
    return chrome.history.deleteUrl({
      url: url
    }, () => {
      this.historys = this.historys.filter(item => item.id !== id);
    });
  }
  deleteAllHistory (): Promise<boolean> {
    this.historys = [];
    return new Promise((resolve, reject) => {
      chrome.history.deleteAll(() => {
        resolve(true);
      });
    });
  }
}

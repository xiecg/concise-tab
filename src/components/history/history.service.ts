import { Injectable } from '@angular/core';

declare const chrome;

const historys = [{"id":"211","lastVisitTime":1496474159639.994,"title":"时间戳转换工具 – Shining Ray","typedCount":0,"url":"http://shiningray.cn/toys/unix-timestamp","visitCount":1},{"id":"210","lastVisitTime":1496474156159.383,"title":"","typedCount":0,"url":"https://www.google.co.jp/url?sa=t&rct=j&q=&esrc=s&source=web&cd=5&ved=0ahUKEwj_mbfRkKHUAhUEf7wKHaSQDAQQFgg-MAQ&url=http%3A%2F%2Fshiningray.cn%2Ftoys%2Funix-timestamp&usg=AFQjCNG2DuZ8Yj6UQrypUPdxivjNwNciaQ","visitCount":1},{"id":"209","lastVisitTime":1496474151041.2852,"title":"时间戳转时间 - Google 搜索","typedCount":0,"url":"https://www.google.co.jp/search?q=%E6%97%B6%E9%97%B4%E6%88%B3%E8%BD%AC%E6%97%B6%E9%97%B4&oq=%E6%97%B6%E9%97%B4%E6%88%B3%E8%BD%AC%E6%97%B6%E9%97%B4&gs_l=serp.3..0l10.5859.5859.0.6152.1.1.0.0.0.0.215.215.2-1.1.0....0...1.1.64.serp..0.1.215.7nCPA76SWpU","visitCount":1},{"id":"208","lastVisitTime":1496474148808.189,"title":"js时间戳与日期格式之间的互转 - 脑细胞 - SegmentFault","typedCount":0,"url":"https://segmentfault.com/a/1190000000481753","visitCount":1},{"id":"207","lastVisitTime":1496474148292.8691,"title":"","typedCount":0,"url":"https://www.google.co.jp/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwjH6IDOkKHUAhXHTbwKHch9DS4QFggmMAA&url=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000000481753&usg=AFQjCNEg9D3yeqw53oF7H0wy3dheLBx8fQ","visitCount":1},{"id":"206","lastVisitTime":1496474144039.9639,"title":"时间戳转时间 js - Google 搜索","typedCount":0,"url":"https://www.google.co.jp/search?q=%E6%97%B6%E9%97%B4%E6%88%B3%E8%BD%AC%E6%97%B6%E9%97%B4+js&oq=%E6%97%B6%E9%97%B4%E6%88%B3&aqs=chrome.2.69i57j69i59j0l4.7675j0j1&sourceid=chrome&ie=UTF-8","visitCount":1},{"id":"205","lastVisitTime":1496474107273.275,"title":"Unix时间戳(Unix timestamp)转换工具 - 站长工具","typedCount":0,"url":"http://tool.chinaz.com/Tools/unixtime.aspx","visitCount":1},{"id":"204","lastVisitTime":1496474105300.761,"title":"时间戳转时间 - Google 搜索","typedCount":0,"url":"https://www.google.co.jp/search?q=%E6%97%B6%E9%97%B4%E6%88%B3%E8%BD%AC%E6%97%B6%E9%97%B4&oq=%E6%97%B6%E9%97%B4%E6%88%B3%E8%BD%AC%E6%97%B6%E9%97%B4&aqs=chrome..69i57j0l5.3735j0j1&sourceid=chrome&ie=UTF-8","visitCount":1},{"id":"155","lastVisitTime":1496473882933.045,"title":"消息 - 明道","typedCount":0,"url":"https://www.mingdao.com/chat","visitCount":16},{"id":"203","lastVisitTime":1496473620612.501,"title":"chrome.history.getVisits( url: 'http://www.google.com/' }, function(visitItemArray){ console.log(visitItemArray); }); - Google 搜索","typedCount":0,"url":"https://www.google.co.jp/search?q=chrome.history.getVisits(+url%3A+%27http%3A%2F%2Fwww.google.com%2F%27+%7D%2C+function(visitItemArray)%7B+console.log(visitItemArray)%3B+%7D)%3B&oq=chrome.history.getVisits(+url%3A+%27http%3A%2F%2Fwww.google.com%2F%27+%7D%2C+function(visitItemArray)%7B+console.log(visitItemArray)%3B+%7D)%3B&aqs=chrome..69i57.332j0j1&sourceid=chrome&ie=UTF-8","visitCount":1},{"id":"202","lastVisitTime":1496472750714.883,"title":"What's New In DevTools (Chrome 60)  |  Web  |  Google Developers","typedCount":0,"url":"https://developers.google.com/web/updates/2017/05/devtools-release-notes#badges","visitCount":1},{"id":"201","lastVisitTime":1496472743368.701,"title":"What's New In DevTools (Chrome 60)  |  Web  |  Google Developers","typedCount":0,"url":"https://developers.google.com/web/updates/2017/05/devtools-release-notes","visitCount":1}]

interface HistoryInterface {
  id: string;
}

@Injectable()
export class HistoryService {
  historys: HistoryInterface[];
  constructor () {}
  getAll (): Promise<[HistoryInterface]> {
    return new Promise((resolve, reject) => {
      resolve(historys);
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
  deleteHistory (id: string): HistoryService {
    this.historys = this.historys.filter(item => item.id !== id);
    return this;
  }
}

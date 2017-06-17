import { Injectable } from '@angular/core';
import { Headers, Http, Jsonp, RequestOptions } from '@angular/http';

declare const chrome;

@Injectable()
export class SearchService {
  antistop: string[];
  constructor (private http: Http, private jsonp: Jsonp) {}
  setAntistop (list: string[]) {
    this.antistop = list;
  }
  getSearchAntistops (value: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
      let options = new RequestOptions({ params: {
        client: 'chrome',
        q: value,
        callback: 'JSONP_CALLBACK',
      } });
      this.jsonp.get('https://www.google.com/complete/search', options).subscribe((result: any) => {
        resolve(result._body[1]);
      });
    });
  }
}

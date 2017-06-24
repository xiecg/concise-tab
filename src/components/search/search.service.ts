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
      let options = new RequestOptions({
        headers: new Headers({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }),
        params: {
          client: 'chrome',
          q: value,
          callback: 'JSONP_CALLBACK',
        }
      });
      // http://suggestion.baidu.com/su?wd=11&p=3&t=1497784244647&cb=cbackc
      this.jsonp.get('https://www.google.com/complete/search', options).subscribe((result: any) => {

        // jsonp
        resolve(result._body[1]);

        // http
        // result = JSON.parse(result._body);
        // resolve(result[1]);
      });
    });
  }
}

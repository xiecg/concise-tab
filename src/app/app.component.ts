import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private http: Http) {}
  private title: string;
  fadeIn: boolean;
  ngOnInit () {
    this.title = 'app works!';
    this.fadeIn = true;
    // this.http.get('https://unsplash.it/1680/910?random').subscribe(res => {
    //   console.log(res)
    // });
  }
  animationend () {
    this.fadeIn = false;
  }
}

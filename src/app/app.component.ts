import { Component } from '@angular/core';
import { HttpModule }    from '@angular/http';

console.log('HttpModule', HttpModule);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app works!';
}

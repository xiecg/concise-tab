import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ContentComponent, MenuComponent } from '../components';
import { RenderBackgroundImageDirective } from '../directive/renderBackgroundImage.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    ContentComponent,
    MenuComponent,
    RenderBackgroundImageDirective
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule {};

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ContentComponent, MenuComponent, BookmarkComponent, AppsComponent } from '../components';
import { RenderBackgroundImageDirective } from '../directive/renderBackgroundImage.directive';

import { ManagementService } from '../service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    ContentComponent,
    MenuComponent,
    BookmarkComponent,
    AppsComponent,
    RenderBackgroundImageDirective
  ],
  providers: [
    ManagementService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {};

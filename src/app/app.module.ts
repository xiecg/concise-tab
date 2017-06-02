import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ContentComponent, MenuComponent, ReturnComponent, BookmarkComponent, AppsComponent, ExtendsComponent, HistoryComponent } from '../components';
import { RenderBackgroundImageDirective } from '../directive/renderBackgroundImage.directive';

import { MdMenuModule } from '@angular/material';

import { ManagementService } from '../service';
import { AppsService } from '../components/apps/apps.service';
import { ExtendsService } from '../components/extends/extends.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdMenuModule
  ],
  declarations: [
    AppComponent,
    ContentComponent,
    MenuComponent,
    ReturnComponent,
    BookmarkComponent,
    AppsComponent,
    ExtendsComponent,
    HistoryComponent,
    RenderBackgroundImageDirective
  ],
  providers: [
    ManagementService,
    AppsService,
    ExtendsService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {};

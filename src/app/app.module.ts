
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdMenuModule, MdDialogModule, MdButtonModule, MdSnackBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import {
  ContentComponent,
  SearchComponent,
  MenuComponent,
  ReturnComponent,
  BookmarkComponent, ConfirmBookMarkUpdateNameDialog,
  AppsComponent,
  ExtendsComponent,
  HistoryComponent, ConfirmDeleteAllDialog
} from '../components';

import {
  ConfigService,
  ManagementService,
  AppsService,
  ExtendsService,
  HistoryService,
  BookmarkService
} from '../service';

import { RenderBackgroundImageDirective } from '../directive';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdMenuModule, MdDialogModule, MdButtonModule, MdSnackBarModule
  ],
  declarations: [
    AppComponent,
    /* components */
    ContentComponent,
    SearchComponent,
    MenuComponent,
    ReturnComponent,
    BookmarkComponent, ConfirmBookMarkUpdateNameDialog,
    AppsComponent,
    ExtendsComponent,
    HistoryComponent, ConfirmDeleteAllDialog,
    /* directives */
    RenderBackgroundImageDirective
  ],
  entryComponents: [
    ConfirmBookMarkUpdateNameDialog,
    ConfirmDeleteAllDialog
  ],
  providers: [
    ConfigService,
    ManagementService,
    AppsService,
    ExtendsService,
    HistoryService,
    BookmarkService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {};

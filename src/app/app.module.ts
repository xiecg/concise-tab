
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MdMenuModule, MdDialogModule, MdButtonModule, MdSnackBarModule, MdAutocompleteModule, MdOptionModule } from '@angular/material';
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
  BookmarkService,
  SearchService
} from '../service';

import { RenderBackgroundImageDirective } from '../directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule, JsonpModule,
    /* material components */
    MdMenuModule, MdDialogModule, MdButtonModule, MdSnackBarModule, MdAutocompleteModule, MdOptionModule
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
    BookmarkService,
    SearchService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {};

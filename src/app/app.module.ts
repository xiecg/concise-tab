
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdMenuModule, MdDialogModule, MdButtonModule, MdSnackBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import {
  ContentComponent,
  MenuComponent,
  ReturnComponent,
  BookmarkComponent,
  AppsComponent,
  ExtendsComponent,
  HistoryComponent, ConfirmDeleteAllDialog
} from '../components';

import {
  ManagementService,
  AppsService,
  ExtendsService,
  HistoryService
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
    MenuComponent,
    ReturnComponent,
    BookmarkComponent,
    AppsComponent,
    ExtendsComponent,
    HistoryComponent, ConfirmDeleteAllDialog,
    /* directives */
    RenderBackgroundImageDirective
  ],
  entryComponents: [
    ConfirmDeleteAllDialog
  ],
  providers: [
    ManagementService,
    AppsService,
    ExtendsService,
    HistoryService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {};

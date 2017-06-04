
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdMenuModule, MdDialogModule, MdButtonModule, MdSnackBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import services from '../service';
import components, { ConfirmDeleteAllDialog } from '../components';
import directives from '../directive';

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
    ... components,
    ... directives
  ],
  entryComponents: [
    ConfirmDeleteAllDialog
  ],
  providers: [
    ... services
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {};

// This is the ROOT MODULE of our app

import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { NgModule }       from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { KegListComponent }  from './keg-list.component';
import { EditKegComponent }  from './edit-keg.component';

@NgModule({
  imports: [ BrowserModule,
             FormsModule ],
  declarations: [ AppComponent,
                  KegListComponent,
                  EditKegComponent, ], // declarations is an array of all components that will reside in this module.
  bootstrap:    [ AppComponent ] // this is the root component and will be the first to show on the index page
})

export class AppModule { }

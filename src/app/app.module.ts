import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCbPKrJ6d1xK_EfFt34M55DPnMAJoloQPI",
    authDomain: "newtechestoque.firebaseapp.com",
    databaseURL: "https://newtechestoque.firebaseio.com",
    projectId: "newtechestoque",
    storageBucket: "newtechestoque.appspot.com",
    messagingSenderId: "844682411095"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

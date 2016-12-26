import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBoDqVJN7nyuxkhR9XCAiqxed9y6Ot2dgg",
  authDomain: "learning-project-cb831.firebaseapp.com",
  databaseURL: "https://learning-project-cb831.firebaseio.com",
  storageBucket: "learning-project-cb831.appspot.com"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

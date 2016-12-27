import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { ModalModule } from 'ng2-bootstrap/modal';

export const firebaseConfig = {
  apiKey:         //
  authDomain:     // Place Here
  databaseURL:    // your Firebase keys
  storageBucket:  //
};

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

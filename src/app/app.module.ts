import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { ModalModule } from 'ng2-bootstrap/modal';
import { HeroesComponent } from './heroes/heroes.component';
import { RouterModule }   from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const firebaseConfig = {
  apiKey:         "AIzaSyBoDqVJN7nyuxkhR9XCAiqxed9y6Ot2dgg",
  authDomain:     "learning-project-cb831.firebaseapp.com",
  databaseURL:    "https://learning-project-cb831.firebaseio.com",
  storageBucket:  "learning-project-cb831.appspot.com"
};

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailsComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'heroes',
        component: HeroesComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

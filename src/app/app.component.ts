import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import { Hero } from './model/hero';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  heroes: FirebaseListObservable<Hero[]>;
  selectedHero: Hero;
  fb: AngularFire;
  selectedFBHero: FirebaseObjectObservable<Hero>;

  constructor(af: AngularFire) {
    this.fb = af;
    this.heroes = af.database.list('/heroes');
  }

  onSelect(key: number): void {
    this.selectedFBHero = this.fb.database.object('heroes/' + key);
    this.selectedFBHero.subscribe(snapshot => {
      this.selectedHero = snapshot
    });
  }

  addHero() : void {

  }





  // save(newName: string) {
  //   this.item.set({ name: newName });
  // }
  // update(newSize: string) {
  //   this.item.update({ size: newSize });
  // }
  // delete() {
  //   this.item.remove();
  // }
}

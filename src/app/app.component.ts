import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import { Hero } from './model/hero';

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
  item: FirebaseObjectObservable<any>;

  constructor(af: AngularFire) {
    this.fb = af;
    this.heroes = af.database.list('/heroes');
    this.item = af.database.object('/item');
  }

  onSelect(key: number): void {
    this.fb.database.object('heroes/' + key).subscribe(snapshot => {
      this.selectedHero = snapshot
    });
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

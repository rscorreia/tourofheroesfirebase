import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import { Hero } from './../model/hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent  {

  title = 'app works!';
  heroes: FirebaseListObservable<Hero[]>;
  selectedHero: Hero;
  fb: AngularFire;
  selectedFBHero: FirebaseObjectObservable<Hero>;
  newHeroName: string;

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
    var lastID: number = 0;
    this.heroes.forEach(heroes => {
      heroes.forEach(hero => {
        if (hero.id > lastID) lastID = hero.id;
      })
    });
    this.heroes.push({
      "id": lastID + 1,
      "name": this.newHeroName
    }).then(_ => {
      this.newHeroName = ""
    });
  }

}
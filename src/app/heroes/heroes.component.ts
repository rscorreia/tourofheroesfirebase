import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import { Hero } from './../model/hero';
import { HeroService } from './../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: FirebaseListObservable<Hero[]>;
  selectedHero: FirebaseObjectObservable<Hero>;
  newHeroName: string;

  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(private heroService: HeroService) {

  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(key: string): void {
    this.heroService.getHero(key).then(hero => {
      this.selectedHero = hero;
      console.log('selectedHero: '+this.selectedHero);
    });
  }

  addHero() : void {
    // var lastID: number = 0;
    // this.heroes.forEach(heroes => {
    //   heroes.forEach(hero => {
    //     if (hero.id > lastID) lastID = hero.id;
    //   })
    // });
    // this.heroes.push({
    //   "id": lastID + 1,
    //   "name": this.newHeroName
    // }).then(_ => {
    //   this.newHeroName = ""
    // });
  }

}

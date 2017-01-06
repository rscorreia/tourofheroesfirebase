import {Component, Input } from '@angular/core';
import { Hero } from './../model/hero';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';



@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  //styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent {

  @Input()
  hero : FirebaseObjectObservable<Hero>;

  updatedHero: Hero;

  constructor(private af: AngularFire) {

  }


  saveHero() : void {
    // this.hero.set({
    //   "id": this.hero.id,
    //   "name": this.hero.name
    // });
  }

  deleteHero() : void {
    // this.FBHero.remove().then(_ =>
    //   this.hero = null,
    //   this.FBHero = null
    // );
  }

  cancel() : void {
    this.hero = null;
  }
}

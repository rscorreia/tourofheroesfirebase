import {Component, OnInit, Input,} from '@angular/core';
import { Hero } from './../model/hero';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';



@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  //styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  @Input()
  hero : Hero;

  @Input()
  FBHero: FirebaseObjectObservable<Hero>;

  fb: AngularFire;

  constructor(af: AngularFire) {
    this.fb = af;
  }

  ngOnInit() {
  }

  saveHero() : void {
    this.FBHero.set({
      "id": this.hero.id,
      "name": this.hero.name
    });
  }

  deleteHero() : void {
    this.FBHero.remove().then(_ =>
      this.hero = null,
      this.FBHero = null
    );
  }

  cancel() : void {
    this.hero = null;
    this.FBHero = null;
  }
}

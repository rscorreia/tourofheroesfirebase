import { Injectable } from '@angular/core';
import { Hero } from './model/hero';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {

  firebaseHeroes : FirebaseListObservable<Hero[]>;

  constructor(private af: AngularFire) {

  }

  getHeroes() : Promise<FirebaseListObservable<Hero[]>> {

    return Promise.resolve(this.firebaseHeroes = this.af.database.list('/heroes'));
  }

  getHero(key: string) : Promise<FirebaseObjectObservable<Hero>> {

    return Promise.resolve(this.af.database.object('/heroes/' + key));

  }

  updateHero(key: string, updatedData: Hero) : void {

  }

}

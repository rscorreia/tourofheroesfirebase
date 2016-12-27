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

  fb: AngularFire;

  constructor(af: AngularFire) {
    this.fb = af;
  }

  ngOnInit() {
  }

}

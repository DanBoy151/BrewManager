import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {UiService} from '../../services/ui/ui.service';
import {Subscription} from 'rxjs';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.css']
})
export class BeerCardComponent implements OnInit {

  darkMode: boolean;
  sub1: Subscription;
  condition: string;
  beerName: string;
  latestTemp: number;
  sg: number;
  readingDate: string;
  readingTime: String
  errorMessage: string;

  constructor(public router: Router,
              public ui: UiService) {

  }

  ngOnInit() {
    this.sub1 = this.ui.darkModeState.subscribe((isDark) => {
      this.darkMode = isDark;

      this.beerName="Doombar Clone"
      this.condition="Drinking"
      this.latestTemp=10
      this.sg=1.008
      this.readingDate='10/04/20'
      this.readingTime='15:10:19'
      
    });
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

  openDetails() {
      this.router.navigateByUrl('/details/' + this.beerName);
  }


}

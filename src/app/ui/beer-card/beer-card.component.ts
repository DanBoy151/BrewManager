import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {UiService} from '../../services/ui/ui.service';
import {Subscription} from 'rxjs';
import {first} from 'rxjs/operators';
import {BeerMonitorService} from '../../services/beer-monitor/beer-monitor.service';
import {Reading} from '../../interfaces/reading/reading';
import { pathToFileURL } from 'url';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.css']
})
export class BeerCardComponent implements OnInit {

  darkMode: boolean;
  sub1: Subscription;
  beerID: number;
  condition: string;
  beerName: string;
  latestTemp: number;
  sg: number;
  readingDate: string;
  readingTime: String
  errorMessage: string;
  readingData: Reading

  constructor(public router: Router,
              public ui: UiService,
              public beerMonitor: BeerMonitorService) {

  }

  ngOnInit() {
    this.sub1 = this.ui.darkModeState.subscribe((isDark) => {
      this.darkMode = isDark;
    });

      this.beerID=1
      this.beerName="Doombar Clone"
      this.condition="Drinking"

      this.beerMonitor.getLatestReading(1)
      .subscribe((payload: Reading) => {
        this.latestTemp = payload.temp;
        this.sg = payload.sg;
        this.breakUpDateString(payload.date)
      });  
  }

  breakUpDateString(val: String) {

    var splitted = val.split(" ", 2); 
    this.readingDate= splitted[0]
    this.readingTime= splitted[1]
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

  openDetails() {
      this.router.navigateByUrl('/details/' + this.beerName);
  }


}
import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {WeatherService} from '../../services/weather/weather.service';
import {UiService} from '../../services/ui/ui.service';
import {Subscription} from 'rxjs';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit, OnDestroy {

  darkMode: boolean;
  sub1: Subscription;
  condition: string;
  currentTemp: number;
  maxTemp: number;
  minTemp: number;
  cityName;
  errorMessage: string;
  

  constructor(public weather: WeatherService,
              public router: Router,
              public ui: UiService 
              ) {
  }

  ngOnInit() {
    this.sub1 = this.ui.darkModeState.subscribe((isDark) => {
      this.darkMode = isDark;
    });

    this.weather.getWeather(this.cityName)
      .subscribe((payload) => {
        this.condition = payload.weather[0].main;
        this.currentTemp = Math.floor(payload.main.temp);
      }, (err) => {
        this.errorMessage = err.error.message;
        setTimeout(() => {
          this.errorMessage = '';
        }, 3000);
      });
    this.weather.getForecast(this.cityName)
      .subscribe((payload) => {
        this.maxTemp = Math.round(payload[0].main.temp);
        this.minTemp = Math.round(payload[0].main.temp);
        for (const res of payload) {
          if (new Date().toLocaleDateString('en-GB') === new Date(res.dt_txt).toLocaleDateString('en-GB')) {
            this.maxTemp = res.main.temp > this.maxTemp ? Math.round(res.main.temp) : this.maxTemp;
            this.minTemp = res.main.temp < this.minTemp ? Math.round(res.main.temp) : this.minTemp;
          }
        }
      }, (err) => {
        this.errorMessage = err.error.message;
        setTimeout(() => {
          this.errorMessage = '';
        }, 3000);
      });



    /*this.condition="Clouds"
    this.currentTemp=12
    this.maxTemp=19
    this.minTemp=8*/
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

  openDetails() {
      this.router.navigateByUrl('/details/' + this.cityName);
  }


}


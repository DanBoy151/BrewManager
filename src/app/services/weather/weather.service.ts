import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {first, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public http: HttpClient) {
  }
  
  private readonly baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  private readonly forcastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=';
  private readonly appID = environment.appID;


  getWeather(city: string, metric: 'metric' | 'imperial' = 'metric'): Observable<any> {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=8aaeb64b4c2480992473d0e2d9bf7fd2`).pipe((first()));
  }

  getForecast(city: string, metric: 'metric' | 'imperial' = 'metric'): Observable<any> {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&APPID=8aaeb64b4c2480992473d0e2d9bf7fd2`)
      .pipe(first(), map((weather) => weather['list']));
  }
}
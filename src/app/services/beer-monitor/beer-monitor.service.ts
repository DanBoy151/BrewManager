import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {first, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BeerMonitorService {

  private readonly readingURL ='http://tiltmonitorapplication.ap-southeast-2.elasticbeanstalk.com//tilt/reading/1/latest'

  constructor(public http: HttpClient) {
  }
  getLatestReading(beer: BigInteger): Observable<any> {
    return this.http.get(`${this.readingURL}${beer}/latest`).pipe((first()));
  }
  
}

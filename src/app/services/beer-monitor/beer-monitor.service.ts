import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {first, map, catchError, retry} from 'rxjs/operators';
import {Reading} from '../../interfaces/reading/reading';

@Injectable({
  providedIn: 'root'
})
export class BeerMonitorService {

  constructor(public http: HttpClient) {
  }
  
  private readonly baseURL = 'http://tiltmonitorapplication.ap-southeast-2.elasticbeanstalk.com/tilt/reading/';

  getLatestReading(beerID: number): Observable<Reading> {
    return this.http.get<Reading>(
      `http://tiltmonitorapplication.ap-southeast-2.elasticbeanstalk.com/tilt/reading/1/latest`).pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

// Error handling
errorHandl(error) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}

}
import { Response, Http } from '@angular/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable()
export class HeaderService {

  constructor(private http: Http) { }

  getWeather() {
    return this.http.get(environment.sourceUrl + '/weather/warning');
  }
}

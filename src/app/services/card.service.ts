import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CardService {

  constructor(private _http: Http) { }

  getAllCards(): Observable<any> {
    return this._http.get('api/cards')
      .map(response => response.json().data);
  }


  


}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Client} from './modele/user/Client';
import {Observable, of, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Guest} from './modele/user/Guest';
import {ReponseServeur} from './modele/user/ReponseServeur';

const httpHeaders = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set ('Access-Control-Allow-Headers', 'x-auth, content-type')
  .set('Cache-Control', 'no-cache');

const  options = {
  headers: httpHeaders
};

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  private apiUrl = 'http://localhost:8080/spring-mvc-restfull-crud-example/';

  constructor(private http: HttpClient) {}

  ouvrirUnCompte(guest: Guest): Observable<any> {
    return this.http.post<ReponseServeur>(this.apiUrl + 'ouvrir-compte', guest)
      .pipe(catchError(err => of('Erreur serveur, veuillez reessayer!')));
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { Client } from './modele/user/Client';
import {catchError} from 'rxjs/operators';




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
export class ClientService {

  private apiUrl = 'http://localhost:8080/spring-mvc-restfull-crud-example/';

  constructor(private http: HttpClient) {}

  findAll(): Observable<any> {
    return this.http.get<Client[]>(this.apiUrl + 'clients')
      .pipe(catchError(err => throwError('ERREUR SELECT CLIENT' + err)));
  }

  findById(id: number): Observable<any> {
    return this.http.get<Client>(this.apiUrl + 'client/' + id)
      .pipe(catchError(err => throwError('ERREUR GET CLIENT' + err)));
  }

  saveClient(client: Client): Observable<any> {
    return this.http.post<Client>(this.apiUrl + 'client', client)
      .pipe(catchError(err => throwError('ERREUR CREATE CLIENT' + err)));
  }

  deleteClientById(id: number): Observable<any> {
    return this.http.delete<Client>(this.apiUrl + 'client/' + id)
      .pipe(catchError(err => throwError('ERREUR DELETE CLIENT' + err)));
  }

  updateClient(client: Client): Observable<any> {
    return this.http.put<Client>(this.apiUrl + 'client/' + client.id, client)
     .pipe(catchError(err => throwError('ERREUR UPDATE CLIENT' + err)));
  }

}

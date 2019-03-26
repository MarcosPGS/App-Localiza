import { API_CONFIG } from './../../config/api.config';
import { Professor } from './../../app/dominio/Professor';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FiltroProfessor } from '../../app/dominio/FiltroProfessor';


/*
  Generated class for the LocalizaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalizaServiceProvider {

  HOST: string;
  PORTA_SERVICO: string;
  NS_PROFESSOR:string = '/professor';
  NS_PESQUISAR: string ='/pesquisar';
  URL: string;

  constructor(public http: HttpClient) {
    this.HOST = API_CONFIG.apiUrl;
    this.PORTA_SERVICO = API_CONFIG.porta;
    this.URL= `${this.HOST}${this.PORTA_SERVICO}`;
  }
  
  getHeaders(){
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return headers;
  }

  listar(): Observable<Professor[]>{
    return this.http.get<Professor[]>(`${this.HOST}${this.PORTA_SERVICO}${this.NS_PROFESSOR}`);

  }

  pesquisar(f : FiltroProfessor):Observable<Professor[]>{
    return this.http.post<Professor[]>(`${this.HOST}${this.PORTA_SERVICO}${this.NS_PROFESSOR}${this.NS_PESQUISAR}`
    ,f,{headers:  this.getHeaders() });
  
  }

  searchByName(nome: string): Observable<Professor[]>{
    return this.http.get<Professor[]>(`${this.URL}${this.NS_PROFESSOR}/${nome}`);
   }

}

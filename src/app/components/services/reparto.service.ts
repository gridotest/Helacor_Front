import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/environment';
import { Reparto } from '../../interfaces/reparto';


@Injectable({
  providedIn: 'root'
})
export class RepartoService {
  private myAppUrl : string = environment.endpoint;
  private myAPIUrl : string = 'api/Repartos/';  


  constructor(private http: HttpClient) { }

  //IMPLEMENTAR METODOS GET
}

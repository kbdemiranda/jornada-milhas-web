import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DestinoService {

  private readonly API = 'http://localhost:3000/destinos';

  constructor(private HttpClient: HttpClient) { }

  listar() {
    const size: number = 10;

    let httpParams = new HttpParams()
      .set('_page', '1')
      .set('_limit', size);


    return this.HttpClient.get(this.API, {params: httpParams});
  }

}

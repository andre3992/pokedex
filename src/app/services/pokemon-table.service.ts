import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import apiUrls from '../constants/api-urls.constants';
import { Observable } from 'rxjs';
import Pokemon from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonTableService {

  constructor(private http: HttpClient) { }

  getPokemons(page: number): Observable<any> {
    const params = new HttpParams()
      .set('offset', page.toString())
      .set('limit', '20');
    return this.http.get<Pokemon>(apiUrls.getPokemon, { params });
  }
}
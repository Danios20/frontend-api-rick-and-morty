import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { map, retry, take, tap } from 'rxjs';

import { Character } from '../models/character.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getAllCharacters(page?: number) {
    let params = new HttpParams();
    if (page !== undefined) {
      params = params.set('page', page);
    }
    return this.http.get<Character>(environment.baseUrlAPI, { params })
    .pipe(
      retry(2),
      tap(response => response.results),
      map(response => response.results.map(item => {
        return {
          ...item,
          lastEpisode: item.episode.length
        }
      }))
    )
  }

  getCharacter(id: number) {
    return this.http.get<Character>(`${environment.baseUrlAPI}/${id}`);
  }
}

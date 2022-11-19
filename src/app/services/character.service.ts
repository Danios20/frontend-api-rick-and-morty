import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { findIndex, map, retry, switchMap, take, tap, zip } from 'rxjs';

import { Character, CharacterDTO, Location, LocationDTO } from '../models/character.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
/**
 * Clase que representa el servicio que contiene la lógica del negocio
 */
export class CharacterService {
/**
 *
 * @param http
 * Se inyecta el modulo para hacer peticiones de tipo Rest
 */
  constructor(private http: HttpClient) { }
/**
 *Metodo para hacer petición de tipo Get a todos los personajes de la Api
 * @param page
 * @returns colección de personajes
 */
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
/**
 * Metodo para hacer petición de tipo Get de forma individual
 * @param id
 * @returns Objeto de Location
 */
  getLocation(id: number) {
    return this.http.get<CharacterDTO>(`${environment.baseUrlAPI}/${id}`)
    // Se modifica la peticion con un pipe
    .pipe(
      // Permite mapear la respuesta
      switchMap((character) => {
        const locationUrl = character.location?.url;
        return this.http.get<LocationDTO>(`${locationUrl}`)
        .pipe(
          map((location: LocationDTO) => location));
      })
    );
  }
  /**
   *Metodo Get para traer la vista detalle del personaje
   * @param id
   * @returns Objeto de tipo personaje
   */
  getCharacter(id: number) {
    return this.http.get<CharacterDTO>(`${environment.baseUrlAPI}/${id}`)
  }
/**
 *Metodo que realiza dos peticiones al tiempo
 * @param id
 * @returns DTO del personaje de la locacion
 */
  getCharacterAndLocation(id: number) {
    return zip (
      this.getCharacter(id),
      this.getLocation(id)
    )
  }

}

/**
 * Modelo para Personaje
 */
export interface Character {
  info:    Info;
  results: Result[];
}
/**
 * Dto para personaje que hereda de la interfaz Resulta
 */
export interface CharacterDTO extends Partial<Result> { }
/**
 * Modelo Info
 */
export interface Info {
  count: number;
  pages: number;
  next:  string;
  prev:  null;
}
/**
 * Modelo result que representa los personajes
 */
export interface Result {
  id:       number;
  name:     string;
  status:   string;
  species:  string;
  type:     string;
  gender:   string;
  origin:   Location;
  location: Location;
  image:    string;
  episode:  string[];
  url:      string;
  created:  string;
  lastEpisode?: number;
}
/**
 * Modelo que tipo de Locacion
 */
export interface Location {
  name: string;
  url:  string;
}
/**
 * Data Transfer Object para Location
 */
export interface LocationDTO {
  id:        number;
  name:      string;
  type:      string;
  dimension: string;
  residents: string[];
  url:       string;
  created:   string;
}
/**
 * Modelo de tipo episodio
 */
export interface Episode {
  id:         number;
  name:       string;
  air_date:   string;
  episode:    string;
  characters: string[];
  url:        string;
  created:    Date;
}

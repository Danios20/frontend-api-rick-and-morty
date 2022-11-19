export interface Character {
  info:    Info;
  results: Result[];
}

export interface CharacterDTO extends Partial<Result> { }

export interface Info {
  count: number;
  pages: number;
  next:  string;
  prev:  null;
}

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

export interface Location {
  name: string;
  url:  string;
}

export interface LocationDTO {
  id:        number;
  name:      string;
  type:      string;
  dimension: string;
  residents: string[];
  url:       string;
  created:   string;
}

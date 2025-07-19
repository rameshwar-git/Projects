export interface GeoCoords {
  lat: number;
  lng: number;
  accuracy?: number;
}

export interface GeoError {
  code: number;
  message: string;
}

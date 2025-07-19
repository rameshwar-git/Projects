import { GeoCoords } from '../types/map';

export const DEFAULT_CENTER: GeoCoords = {
  lat: 20.5937,
  lng: 78.9629,
};

export const DEFAULT_ZOOM = 15;

export const GOOGLE_MAPS_API_KEY =
  import.meta.env.VITE_GOOGLE_MAPS_KEY ?? 'YOUR_FALLBACK_KEY';

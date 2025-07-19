import { GeoCoords } from '../../../../types/map';

/** Distance (meters) between two geographic points using Haversine formula. */
export function distanceBetween(a: GeoCoords, b: GeoCoords): number {
  const R = 6_371_000; // meters
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a.lat)) *
      Math.cos(toRad(b.lat)) *
      Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

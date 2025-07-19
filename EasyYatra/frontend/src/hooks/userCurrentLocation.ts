import { useEffect, useState, useCallback } from 'react';
import { GeoCoords, GeoError } from '../types/map';

/** Browser geolocation options */
const GEO_OPTIONS: PositionOptions = {
  enableHighAccuracy: true,
  timeout: 10_000, //10 s
  maximumAge: 60_000, //1 min
};

interface LocationState {
  coords: GeoCoords | null;
  loading: boolean;
  error: GeoError | null;
}

/**
 * Fetches the user's current device position once,
 * then exposes loading / error state.
 */
function useCurrentLocation(): LocationState {
  const [state, setState] = useState<LocationState>({
    coords: null,
    loading: true,
    error: null,
  });

  const onSuccess = useCallback((pos: GeolocationPosition) => {
    setState({
      coords: {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
        accuracy: pos.coords.accuracy,
      },
      loading: false,
      error: null,
    });
  }, []);

  const onError = useCallback((err: GeolocationPositionError) => {
    setState({
      coords: null,
      loading: false,
      error: {
        code: err.code,
        message: err.message,
      },
    });
  }, []);

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: 'Geolocation unsupported in this browser',
      } as GeolocationPositionError);
      return;
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError, GEO_OPTIONS);
  }, [onSuccess, onError]);

  return state;
}

export default useCurrentLocation;

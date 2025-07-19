import React from 'react';
import { APIProvider } from '@vis.gl/react-google-maps';
import MapContainer from '../../../container/components/map/MapContainer';
import MapLoader from '../../../container/components/map/MapLoader';
import ErrorFallback from '../../../container/components/map/ErrorFallback';
import useCurrentLocation from '../../../hooks/userCurrentLocation';
import { GOOGLE_MAPS_API_KEY, DEFAULT_CENTER } from '../../../config/googleMapsConfig';

const MapPage: React.FC = () => {
  const { coords, loading, error } = useCurrentLocation();

  return (
    <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
      <section style={{ width: '100vw', height: '100vh' }}>
        {loading && <MapLoader />}
        {error && <ErrorFallback error={error} />}
        {!loading && !error && coords && <MapContainer center={coords} />}
        {/* Fallback when geolocation fails silently */}
        {!loading && !error && !coords && <MapContainer center={DEFAULT_CENTER} />}
      </section>
    </APIProvider>
  );
};

export default MapPage;
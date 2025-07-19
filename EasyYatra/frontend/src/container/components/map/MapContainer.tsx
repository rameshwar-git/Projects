import React from 'react';
import { Map, Marker } from '@vis.gl/react-google-maps';
import { DEFAULT_CENTER, DEFAULT_ZOOM } from '../../../config/googleMapsConfig';
import { GeoCoords } from '../../../types/map';

interface Props {
  center: GeoCoords;
  children?: React.ReactNode;
}
const MapContainer: React.FC<Props> = ({ center, children }) => (
  <Map
    style={{ width: '100%', height: '100%' }}
    center={center}
    zoom={DEFAULT_ZOOM}
    gestureHandling="greedy"
  >
    {/* Home marker */}
    <Marker position={center} />
    {children}
  </Map>
);

export default MapContainer;
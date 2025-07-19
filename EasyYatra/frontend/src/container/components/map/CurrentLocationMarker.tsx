import React from 'react';
import { Marker } from '@vis.gl/react-google-maps';
import { GeoCoords } from '../../../types/map';

const markerIcon = {
  url: '/icons/current-location.svg',
  scaledSize: { width: 40, height: 40 } as google.maps.Size,
};

const CurrentLocationMarker: React.FC<{ position: GeoCoords }> = ({
  position,
}) => <Marker position={position} icon={markerIcon} />;

export default CurrentLocationMarker;

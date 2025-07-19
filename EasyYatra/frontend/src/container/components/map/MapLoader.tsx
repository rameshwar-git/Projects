import React from 'react';
import './MapLoader.css'; // pure CSS spinner

const MapLoader: React.FC = () => (
  <div className="map-loader" role="status" aria-label="Loading map">
    <span className="spinner" />
  </div>
);

export default MapLoader;

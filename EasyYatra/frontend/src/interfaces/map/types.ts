export interface MapProps {
    center: google.maps.LatLngLiteral;
    zoom: number;
    onLoad?: (map: google.maps.Map) => void;
}

export interface MarkerProps {
    position: google.maps.LatLngLiteral;
}

import { Loader } from'@googlemaps/js-api-loader';

import dotenv from 'dotenv';
dotenv.config();

const loader = new Loader ({
    apiKey: `${process.env.MAP_API_KEY}`,
    version: 'weekly',
    libraries: ['places'],
});

export const loadMapApi = loader.load.bind(loader);

export const getGeocoder = async() => {
    await loadMapApi();
    return new google.maps.Geocoder();
};

export const getPlacesService = async (
    map: google.maps.Map
): Promise<google.maps.places.PlacesService> => {
    await loadMapApi();
    return new google.maps.places.PlacesService(map);
};
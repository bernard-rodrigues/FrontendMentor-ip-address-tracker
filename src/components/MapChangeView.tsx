import { useMap } from "react-leaflet";

interface MapChangeViewProps{
    latitude: number,
    longitude: number,
    zoom: number
}

export function MapChangeView({latitude, longitude, zoom}: MapChangeViewProps){
    const map = useMap();
    map.flyTo([latitude, longitude], zoom);
    return null
}
import '../styles/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from "react-leaflet"
import { useIPLocation } from '../contexts/IPLocationContext'
import { Icon } from 'leaflet'
import locationIcon from "../assets/icon-location.svg"
import { MapChangeView } from './MapChangeView'

export function Map(){
    const { IPLocation } = useIPLocation()

    const marker = new Icon({
        iconUrl: locationIcon,
        iconSize: [46, 56],
    })

    return(
        <>
            <MapContainer center={
                IPLocation?.latitude && IPLocation.longitude 
                ? 
                [IPLocation.latitude, IPLocation.longitude]
                :
                [-21.764940, -43.348969]
                } zoom={13} zoomControl={false} scrollWheelZoom={true}
            >
                <MapChangeView 
                    latitude={IPLocation?.latitude ? IPLocation.latitude : -21.764940}
                    longitude={IPLocation?.longitude ? IPLocation.longitude : -43.348969}
                    zoom={13}
                />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={
                    IPLocation?.latitude && IPLocation.longitude 
                    ? 
                    [IPLocation.latitude, IPLocation.longitude]
                    :
                    [-21.764940, -43.348969]}
                    icon={marker}
                >
                    <Popup>
                        {IPLocation?.location ? IPLocation.location.city : "My hometown, Juiz de Fora"}
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    )
}
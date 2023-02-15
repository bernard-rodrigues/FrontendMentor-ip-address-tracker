import '../styles/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from "react-leaflet"
import { useIPLocation } from '../contexts/IPLocationContext'
import { Icon } from 'leaflet'
import locationIcon from "../assets/icon-location.svg"
import { MapChangeView } from './MapChangeView'
import { Loading } from './Loading'

export function Map(){
    const { IPLocation } = useIPLocation()

    const customMarker = new Icon({
        iconUrl: locationIcon,
        iconSize: [46, 56],
    })

    return(
        <main role="main" className="h-[calc(100vh-17.6rem)] w-screen relative">
            {IPLocation ? <MapContainer 
                center={[IPLocation.latitude, IPLocation.longitude]} 
                zoom={13} 
                zoomControl={false} 
                scrollWheelZoom={true}
            >
                <MapChangeView 
                    latitude={IPLocation.latitude}
                    longitude={IPLocation.longitude}
                    zoom={13}
                />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[IPLocation.latitude, IPLocation.longitude]} icon={customMarker}>
                    <Popup>
                        {IPLocation.location.city}
                    </Popup>
                </Marker>
            </MapContainer>
            :
            <Loading />
            }
        </main>
    )
}
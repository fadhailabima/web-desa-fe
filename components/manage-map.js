"use client"

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useState, useCallback, useEffect } from "react";

export default function IndexMap({ data, latitude, longitude }) {
    const [center, setCenter] = useState({ lat: 0, lng: 0 });
    const [zoom, setZoom] = useState(20);

    useEffect(() => {
        setTimeout(() => {
            // Mendapatkan lokasi pengguna saat komponen dimuat
            if (latitude !== undefined && longitude !== undefined) {
                setCenter({ lat: Number(data[0].latitude), lng: Number(data[0].longitude) });
            } else {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        setCenter({
                            lat: Number(data[0]?.latitude),
                            lng: Number(data[0]?.longitude),
                        });
                    },
                    () => {
                        console.log('Error: The Geolocation service failed.');
                    }
                );
            }
            setZoom(15);
        }, 3000)
    }, [latitude, longitude]);
    
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyA-bZUgd5MvnnDfWwOi7ZwuJRm6jHr_WqQ" 
    })
    
    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    return (
        isLoaded ? <>
            <GoogleMap 
                mapContainerStyle={{ height: "100vh", width: "100%" }}
                zoom={zoom}
                center={center}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                {data.map((item, index) => {
                    return (
                        <Marker
                            key={index}
                            position={{ lat: Number(item.latitude), lng: Number(item.longitude) }}
                        />
                    );
                })}
            </GoogleMap>
        </> : <></>
    )
}

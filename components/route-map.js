import React, { useState, useEffect } from "react";
import L from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = ({ position, data }) => {
    const waypoints = [
        L.latLng(position.lat, position.lng),
        L.latLng(Number(data.latitude), Number(data.longitude))
    ];

    const instance = L.Routing.control({
        waypoints,
        lineOptions: {
            styles: [{ color: "#6FA1EC", weight: 4 }]
        },
        show: false,
        addWaypoints: false,
        routeWhileDragging: true,
        draggableWaypoints: true,
        fitSelectedRoutes: true,
        showAlternatives: false
    });

    return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default function MapWithRouting({ data }) {
    const [position, setPosition] = useState({ lat: 0, lng: 0 });
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
            setIsLoaded(true);
        });
    }, []);

    const isValidLatLng = (value) => !isNaN(value) && value !== null;

    const hasValidData = data && isValidLatLng(Number(data.latitude)) && isValidLatLng(Number(data.longitude));

    return isLoaded && hasValidData ? (
        <MapContainer
            center={[position.lat, position.lng]}
            zoom={13}
            style={{ height: "80vh", width: "100%", zIndex: "1" }}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <RoutingMachine position={position} data={data} />
        </MapContainer>
    ) : (
        <div>Loading...</div>
    );
}

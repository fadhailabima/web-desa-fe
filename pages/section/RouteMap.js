"use client"
import PopUp from "@/components/Popup";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const RoutingMachine = dynamic(() => import("@/components/route-map"), { ssr: false });

const RouteMap = () => {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
        setPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        });
    })
  }, [])

  return (
    <main className="h-full">
      {/* <PopUp text={popupText} isOpen={showPopup} type={popupType} /> */}
      <div className="container mx-auto">
        <div className="flex items-center flex-row justify-between m-5">
          <div className="container">
            <RoutingMachine position={position} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default RouteMap;

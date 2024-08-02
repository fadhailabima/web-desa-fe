"use client"
import PopUp from "@/components/Popup";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { getMapById } from "@/services/map";
import { useParams } from "next/navigation";

const MapWithRouting = dynamic(() => import("@/components/route-map"), { ssr: false });

const RouteMap = ({ id }) => {
    const [position, setPosition] = useState({ lat: 0, lng: 0 });
    const [token, setToken] = useState("");
    const [lokasi, setLokasi] = useState({});

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setPosition({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            });
        })
    }, [])

    

    useEffect(() => {
        if (typeof window !== "undefined") {
        setToken(localStorage.getItem("token"));
        }
    }, []);

    useEffect(() => {
        if(id && token) {
            const fetchMap = async () => {
                try {
                    const data = await getMapById(token, id);
                    setLokasi(data)
                } catch (err) {
                    console.error(err);
                }
            }
            fetchMap()
        }
    }, [id, token])

  return (
    <main className="h-full">
      {/* <PopUp text={popupText} isOpen={showPopup} type={popupType} /> */}
      <div className="container mx-auto">
        <div className="flex items-center flex-row justify-between m-5">
          <div className="container">
            <MapWithRouting position={position} data={lokasi} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default RouteMap;

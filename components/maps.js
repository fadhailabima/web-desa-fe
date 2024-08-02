import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useState, useEffect } from "react";
import { deleteMap } from "@/services/map";
import Link from "next/link";

export default function Maps({ data, onDelete }) {
  const [center, setCenter] = useState([0, 0]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [deletePopupVisible, setDeletePopupVisible] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  useEffect(() => {
    if (data.length > 0 && data[0].latitude && data[0].longitude) {
      const lat = Number(data[0].latitude);
      const lng = Number(data[0].longitude);
      if (!isNaN(lat) && !isNaN(lng)) {
        setCenter([lat, lng]);
        setIsLoaded(true);
      }
    }
  }, [data]);

  return isLoaded ? (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {data.map((item, index) => {
        const lat = Number(item.latitude);
        const lng = Number(item.longitude);
        if (!isNaN(lat) && !isNaN(lng)) {
          return (
            <Marker key={index} position={[lat, lng]}>
              <Popup>
                <div>
                  <h2>{item.nama_lokasi}</h2>
                  <Link href={`/route-map/${item.id}`}>
                    <button className="link-button">Rute</button>
                  </Link>
                  <button
                    className="delete-button border border-gray-200 py-2 px-4 rounded-md bg-gradient-to-r from-red-500 to-red-700 text-white hover:bg-white hover:text-black"
                    onClick={() => onDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </Popup>
            </Marker>
          );
        }
        return null;
      })}
    </MapContainer>
  ) : null;
}

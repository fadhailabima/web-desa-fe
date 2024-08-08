import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import { addMap } from "@/services/map";
import { useParams } from "next/navigation";

function DraggableMarker({ position, setPosition }) {
  const [draggable, setDraggable] = useState(false);
  const markerRef = useRef(null);

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      },
    }),
    [setPosition]
  );

  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d);
  }, []);

  return (
    <Marker
      draggable={draggable}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    >
      <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          {draggable
            ? "Marker is draggable"
            : "Click here to make marker draggable"}
        </span>
      </Popup>
    </Marker>
  );
}

export default function MapTambah() {
  const { id } = useParams();
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [position, setPosition] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCenter({ lat: latitude, lng: longitude });
      setPosition({ lat: latitude, lng: longitude });
      setIsLoaded(true);
    });
  }, []);

  const [loading, setLoading] = useState(false);
  const [nama_lokasi, setLokasi] = useState("");
  const [foto_1, setFoto_1] = useState("");
  const [foto_2, setFoto_2] = useState("");
  const [foto_3, setFoto_3] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [popupType, setPopupType] = useState("");

  const handleFileChangeFoto1 = (e) => {
    setFoto_1(e.target.files[0]);
  };

  const handleFileChangeFoto2 = (e) => {
    setFoto_2(e.target.files[0]);
  };

  const handleFileChangeFoto3 = (e) => {
    setFoto_3(e.target.files[0]);
  };

  const handleAddMap = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const res = await addMap(
      token,
      id,
      nama_lokasi,
      position.lat,
      position.lng,
      foto_1,
      foto_2,
      foto_3
    );
    if (res) {
      console.log("Lokasi added:", res);
      setPopupText("Lokasi Berhasil Ditambah");
      setPopupType("success");
      setShowPopup(true);
      setTimeout(() => {
        router.push(`/manage-map/${id}`);
      }, 1500);
    } else {
      console.log("Failed to add lokasi");
      setPopupText("Lokasi Gagal Ditambah");
      setPopupType("error");
      setShowPopup(true);
    }
  };

  return (
    <div className="flex flex-row">
      {isLoaded ? (
        <MapContainer
          center={[center.lat, center.lng]}
          zoom={13}
          style={{ height: "80vh", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <DraggableMarker position={position} setPosition={setPosition} />
        </MapContainer>
      ) : null}
      <div className="container w-1/2">
        <form
          onSubmit={handleAddMap}
          className="gap-5"
          encType="multipart/form-data"
        >
          <div className="relative w-full">
            <h1>Nama Lokasi</h1>
            <input
              type="text"
              className="p-2 text-base w-full border border-gray-300 bg-white rounded focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-300 hover:border-gray-500"
              placeholder="Masukkan nama lokasi"
              onChange={(e) => setLokasi(e.target.value)}
              required
            />
          </div>
          <div className="relative w-full">
            <h1>Latitude</h1>
            <input
              type="text"
              className="p-2 text-base w-full border border-gray-300 bg-white rounded focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-300 hover:border-gray-500"
              placeholder="Masukkan latitude"
              value={position.lat}
              onChange={(e) =>
                setPosition({ ...position, lat: parseFloat(e.target.value) })
              }
              required
            />
          </div>
          <div className="relative w-full">
            <h1>Picture 1</h1>
            <input
              type="file"
              id="foto_1"
              name="foto_1"
              accept="image/*"
              className="p-2 text-base w-full border border-gray-300 bg-white rounded focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-300 hover:border-gray-500"
              onChange={handleFileChangeFoto1}
            />
          </div>
          <div className="relative w-full">
            <h1>Picture 2</h1>
            <input
              type="file"
              id="foto_2"
              name="foto_2"
              accept="image/*"
              className="p-2 text-base w-full border border-gray-300 bg-white rounded focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-300 hover:border-gray-500"
              onChange={handleFileChangeFoto2}
            />
          </div>
          <div className="relative w-full">
            <h1>Picture 3</h1>
            <input
              type="file"
              id="foto_3"
              name="foto_3"
              accept="image/*"
              className="p-2 text-base w-full border border-gray-300 bg-white rounded focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-300 hover:border-gray-500"
              onChange={handleFileChangeFoto3}
            />
          </div>
          <div className="relative w-full">
            <h1>Longitude</h1>
            <input
              type="text"
              className="p-2 text-base w-full border border-gray-300 bg-white rounded focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-300 hover:border-gray-500"
              placeholder="Masukkan longitude"
              value={position.lng}
              onChange={(e) =>
                setPosition({ ...position, lng: parseFloat(e.target.value) })
              }
              required
            />
          </div>
          <button
            type="submit"
            className="capitalize py-3 px-10 text-base rounded-full cursor-pointer border-none text-white font-bold bg-gradient-to-r from-blue-500 to-blue-600"
          >
            Tambah
          </button>
        </form>
      </div>
    </div>
  );
}

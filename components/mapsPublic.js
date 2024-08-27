import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function MapsPublic({ data }) {
  const [center, setCenter] = useState([0, 0]);
  const [isLoaded, setIsLoaded] = useState(false);

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
      style={{ height: "100vh", width: "100%", zIndex: "1" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {data.map((item, index) => {
        const lat = Number(item.latitude);
        const lng = Number(item.longitude);
        if (!isNaN(lat) && !isNaN(lng)) {
          return (
            <Marker key={index} position={[lat, lng]}>
              <Popup>
                <div className="min-w-[250px] flex flex-col items-center">
                  <h2 className="text-xl font-bold">{item.nama_lokasi}</h2>
                  <div className="max-w-[190px] flex my-3">
                    <Carousel>
                      <CarouselContent>
                        <CarouselItem>
                          <img src={`${item.image_1}`} alt="image 1 lokasi" />
                        </CarouselItem>
                        <CarouselItem>
                          <img src={`${item.image_2}`} alt="image 2 lokasi" />
                        </CarouselItem>
                        <CarouselItem>
                          <img src={`${item.image_3}`} alt="image 3 lokasi" />
                        </CarouselItem>
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </div>
                  <div className="flex items-center">
                    <Link href={`/route-map/${item.id}`}>
                      <button className="link-button">Rute</button>
                    </Link>
                  </div>
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

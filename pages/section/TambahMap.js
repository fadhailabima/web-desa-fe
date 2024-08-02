import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { addMap } from "@/services/map";
import DeletePopup from "@/components/DeletePopup";
import PopUp from "@/components/Popup";

const TambahMap = ({ id, isAdmin }) => {
  const [loading, setLoading] = useState(false);
  const [nama_lokasi, setLokasi] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [popupType, setPopupType] = useState("");

  const handleAddMap = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const res = await addMap(token, id, nama_lokasi, latitude, longitude);
    if (res) {
      console.log("Soal added:", res);
      setPopupText("Lokasi Berhasil Ditambah");
      setPopupType("success");
      setShowPopup(true);
      setTimeout(() => {
        router.push(`/manage-map/${id}`);
      }, 1500);
    } else {
      console.log("Failed to add kabinet");
      setPopupText("Lokasi Gagal Ditamnbah");
      setPopupType("error");
      setShowPopup(true);
    }
  };

  return (
    <main>
      <PopUp text={popupText} isOpen={showPopup} type={popupType} />
    </main>
  );
};

export default TambahMap;

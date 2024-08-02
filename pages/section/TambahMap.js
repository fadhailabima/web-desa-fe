"use client"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { addMap } from "@/services/map";
import DeletePopup from "@/components/DeletePopup";
import PopUp from "@/components/Popup";
import dynamic from "next/dynamic";

const MapTambah = dynamic(() => import("@/components/tambah-map"), { ssr: false });

const TambahMap = ({ id, isAdmin }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [popupType, setPopupType] = useState("");

  return (
    <main className="h-full">
      <PopUp text={popupText} isOpen={showPopup} type={popupType} />
      <div className="container mx-auto">
        <div className="flex items-center flex-row justify-between m-5">
          <div className="container">
            <MapTambah />
          </div>
        </div>
      </div>
    </main>
  );
};

export default TambahMap;

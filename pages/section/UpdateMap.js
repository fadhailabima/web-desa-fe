"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { addMap } from "@/services/map";
import DeletePopup from "@/components/DeletePopup";
import PopUp from "@/components/Popup";
import dynamic from "next/dynamic";

const MapUpdate = dynamic(() => import("@/components/update-map"), {
  ssr: false,
});

const UpdateMap = ({ isAdmin }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [popupType, setPopupType] = useState("");
  const router = useRouter();
  const { id, mapId } = router.query;

  return (
    <main className="h-full">
      <PopUp text={popupText} isOpen={showPopup} type={popupType} />
      <div className="container mx-auto">
        <div className="flex items-center flex-row justify-between m-5">
          <div className="container">
            <MapUpdate id={id} catlocsId={mapId} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default UpdateMap;

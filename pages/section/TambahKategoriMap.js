import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { addKategoriMap } from "@/services/map";
import PopUp from "@/components/Popup";

const TambahKategoriMap = ({ isAdmin }) => {
  const [loading, setLoading] = useState(false);
  const [kategori_lokasi, setKategori] = useState("");
  const [error, setError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [popupType, setPopupType] = useState("");
  const router = useRouter();

  const handleAddKategori = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem("token");
    const res = await addKategoriMap(token, kategori_lokasi);
    setLoading(false);
    if (res) {
      console.log("Semester added:", res);
      setPopupText("Kategori Berhasil Ditambah");
      setPopupType("success");
      setShowPopup(true);
      setTimeout(() => {
        router.push("/kategori-map"); // Change route to "/manage-produk"
      }, 1500);
    } else {
      console.log("Failed to add kategori");
      setPopupText("Kategori Gagal Ditambah");
      setPopupType("failed");
      setShowPopup(true);
    }
  };

  return (
    <main className="mt-2 bg-white p-4 shadow-sm rounded-md max-w-md mx-auto">
      <PopUp text={popupText} isOpen={showPopup} type={popupType} />
      <div className="sm:p-2">
        <div className="flex mb-4 items-center">
          <div className="text-primary hover:opacity-90">
            <Link href="/kategori-map">
              <Icon
                icon="iconamoon:arrow-left-5-circle-fill"
                className="h-9 w-9 flex items-center justify-center text-center"
              />
            </Link>
          </div>
          <h2 className="text-black ml-2 text-2xl font-semibold pb-1">
            {isAdmin ? "Tambah Kategori Map" : "Tambah Kategori Map"}
          </h2>
        </div>
        <div className="mt-1"></div>
        <div className="bg-primary h-[2px] mb-4"></div>
        <div className="flex flex-col text-base items-start justify-start">
          <form
            className="flex flex-col w-full"
            onSubmit={(e) => handleAddKategori(e)}
          >
            <div className="mb-6 flex flex-col">
              <label className="mb-2 text-sm font-medium text-black">
                Nama Kategori
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="p-2 border-gray-300 border rounded-md w-full transition-colors duration-300 hover:border-primary"
                placeholder="Nama Kategori"
                onChange={(e) => setKategori(e.target.value)}
                required
              />
            </div>
            <div>
              <button
                className="w-full mt-6 mb-3 rounded-md py-3 text-lg text-white font-semibold text-center bg-primary hover:opacity-80"
                type="submit"
                disabled={loading}
              >
                {loading ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default TambahKategoriMap;

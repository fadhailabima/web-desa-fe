import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { createWisata } from "@/services/wisata";
import PopUp from "@/components/Popup";
import "quill/dist/quill.snow.css";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const TambahWisata = ({ id, isAdmin }) => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [titleSm, setTitleSm] = useState("");
  const [subtitleSm, setSubtitleSm] = useState("");
  const [content, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [popupType, setPopupType] = useState("");
  const router = useRouter();

  const handleFileChangeFoto = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAddWisata = async (e) => {
    e.preventDefault();
    if (!content) {
      setPopupText("Deskripsi Wajib Diisi");
      setPopupType("error");
      setShowPopup(true);
      return;
    }
    const token = localStorage.getItem("token");
    const res = await createWisata(
      token,
      id,
      title,
      titleSm,
      subtitleSm,
      content,
      image
    );
    if (res) {
      console.log("Soal added:", res);
      setPopupText("Fasilitas Berhasil Ditambah");
      setPopupType("success");
      setShowPopup(true);
      setTimeout(() => {
        router.push(`/manage-fasilitas/${id}`);
      }, 1500);
    } else {
      console.log("Failed to add kabinet");
      setPopupText("Fasilitas Gagal Ditambah");
      setPopupType("error");
      setShowPopup(true);
    }
  };

  return (
    <main>
      <PopUp text={popupText} isOpen={showPopup} type={popupType} />
      <div className="mt-2 bg-white p-4 shadow-sm rounded-md max-w-7xl mx-auto">
        <div className="flex mb-4 items-center">
          <div className="text-primary hover:opacity-90">
            <Link href={`/manage-fasilitas/${id}`}>
              <Icon
                icon="iconamoon:arrow-left-5-circle-fill"
                className="h-9 w-9 flex items-center justify-center text-center"
              />
            </Link>
          </div>
          <h2 className="text-black ml-2 text-2xl font-semibold">
            {isAdmin ? "Tambah Fasilitas" : "Tambah Fasilitas"}
          </h2>
        </div>
        <div className="mt-1"></div>
        <div className="bg-primary h-[2px] mb-4"></div>
        <div className="flex flex-col text-base items-start justify-start">
          <form
            className="flex flex-col w-full"
            encType="multipart/form-data"
            onSubmit={(e) => handleAddWisata(e)}
          >
            <div className="mb-6 flex flex-col">
              <label className="mb-2 text-sm font-medium text-black">
                Nama Fasilitas : <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="p-2 border-gray-300 border rounded-md w-full transition-colors duration-300 hover:border-primary"
                placeholder="Nama Fasilitas"
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-6 flex flex-col">
              <label className="mb-2 text-sm font-medium text-black">
                Nama Penulis : <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="p-2 border-gray-300 border rounded-md w-full transition-colors duration-300 hover:border-primary"
                placeholder="Nama Penulis"
                onChange={(e) => setTitleSm(e.target.value)}
                required
              />
            </div>
            <div className="mb-6 flex flex-col">
              <label className="mb-2 text-sm font-medium text-black">
                Subjudul : <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="p-2 border-gray-300 border rounded-md w-full transition-colors duration-300 hover:border-primary"
                placeholder="Subjudul"
                onChange={(e) => setSubtitleSm(e.target.value)}
                required
              />
            </div>
            <div className="mb-6 flex flex-col">
              <label className="mb-2 text-sm font-medium text-black">
                Deskripsi : <span className="text-red-500">*</span>
              </label>
              <QuillNoSSRWrapper
                value={content}
                onChange={setDescription}
                placeholder="Deskripsi"
                theme="snow"
                className="p-2 border-gray-300 border rounded-md w-full transition-colors duration-300 hover:border-primary"
              />
            </div>
            <div className="mb-6 flex flex-col">
              <label className="mb-2 text-sm font-medium text-black">
                Image : <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                id="foto"
                name="foto"
                accept="image/*"
                className="p-2 border-gray-300 border rounded-md w-full transition-colors duration-300 hover:border-primary"
                onChange={handleFileChangeFoto}
                required
              />
            </div>
            <div>
              <button
                className="w-full mt-6 mb-3 rounded-md py-3 text-lg text-white font-semibold text-center bg-primary hover:opacity-90"
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

export default TambahWisata;

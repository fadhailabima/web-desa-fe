import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import PopUp from "@/components/Popup";
import { createVideo } from "@/services/video";
import "quill/dist/quill.snow.css";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const TambahVideo = ({ isAdmin }) => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [titleSm, setTitleSm] = useState("");
  const [subtitleSm, setSubtitleSm] = useState("");
  const [content, setDescription] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [video, setVideo] = useState("");
  const [error, setError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [popupType, setPopupType] = useState("");
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  const handleAddVideo = async (e) => {
    e.preventDefault();
    if (!content) {
      setPopupText("Deskripsi Wajib Diisi");
      setPopupType("error");
      setShowPopup(true);
      return;
    }
    const token = localStorage.getItem("token");
    setLoading(true);
    setUploading(true); // Mulai unggahan
    const res = await createVideo(
      token,
      title,
      titleSm,
      subtitleSm,
      content,
      video,
      inputDate
    );
    setLoading(false);
    setUploading(false); // Selesai unggahan
    if (res) {
      console.log("Blog added:", res);
      setPopupText("Video Berhasil Ditambah");
      setPopupType("success");
      setShowPopup(true);
      setTimeout(() => {
        router.push("/video");
      }, 1500);
    } else {
      console.log("Failed to add video");
      setPopupText("Video Gagal Ditambahkan");
      setPopupType("error");
      setShowPopup(true);
    }
  };

  const handleFileChange = (e) => {
    setVideo(e.target.files[0]);
  };

  return (
    <main>
      <PopUp text={popupText} isOpen={showPopup} type={popupType} />
      <div className="mt-2 bg-white p-4 shadow-sm rounded-md max-w-7xl mx-auto">
        <div className="flex mb-4 items-center">
          <div className="text-primary hover:opacity-90">
            <Link href="/video">
              <Icon
                icon="iconamoon:arrow-left-5-circle-fill"
                className="h-9 w-9 flex items-center justify-center text-center"
              />
            </Link>
          </div>
          <h2 className="text-black ml-2 text-2xl font-semibold">
            {isAdmin ? "Tambah Video" : "Tambah Video"}
          </h2>
        </div>
        <div className="mt-1"></div>
        <div className="bg-primary h-[2px] mb-4"></div>
        <div className="flex flex-col text-base items-start justify-start">
          <form
            className="flex flex-col w-full"
            encType="multipart/form-data"
            onSubmit={handleAddVideo}
          >
            <div className="mb-6 flex flex-col">
              <label className="mb-2 text-sm font-medium text-black">
                Judul : <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="p-2 border-gray-300 border rounded-md w-full transition-colors duration-300 hover:border-primary"
                placeholder="Judul "
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
                theme="snow"
                className="p-2 border-gray-300 border rounded-md w-full transition-colors duration-300 hover:border-primary"
              />
            </div>
            <div className="mb-6 flex flex-col">
              <label className="mb-2 text-sm font-medium text-black">
                Tanggal Rilis : <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                className="p-2 border-gray-300 border rounded-md w-full transition-colors duration-300 hover:border-primary"
                placeholder="Tanggal Rilis"
                onChange={(e) => setInputDate(e.target.value)}
                required
              />
            </div>
            <div className="mb-6 flex flex-col">
              <label className="mb-2 text-sm font-medium text-black">
                Video (Maks 600mb) : <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                accept="video/*"
                className="p-2 border-gray-300 border rounded-md w-full transition-colors duration-300 hover:border-primary"
                onChange={handleFileChange}
                required
              />
            </div>
            <div>
              <button
                className="w-full mt-6 mb-3 rounded-md py-3 text-lg text-white font-semibold text-center bg-primary hover:opacity-90"
                type="submit"
                disabled={loading}
              >
                {loading
                  ? "Saving..."
                  : uploading
                  ? "Uploading video..."
                  : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default TambahVideo;

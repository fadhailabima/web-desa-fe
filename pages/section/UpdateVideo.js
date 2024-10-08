import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import PopUp from "@/components/Popup";
import { editVideo, getVideosById } from "@/services/video";
import "quill/dist/quill.snow.css";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const UpdateVideo = ({ id, isAdmin }) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
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
  const quillRef = useRef(null);

  const handleEditVideo = async (e) => {
    e.preventDefault();
    // if (!content) {
    //   setPopupText("Deskripsi Wajib Diisi");
    //   setPopupType("error");
    //   setShowPopup(true);
    //   return;
    // }
    let updateData = {};
    if (title) updateData.title = title;
    if (titleSm) updateData.titleSm = titleSm;
    if (subtitleSm) updateData.subtitleSm = subtitleSm;
    if (content) updateData.content = content;
    if (video) updateData.video = video;
    if (inputDate) updateData.inputDate = inputDate;
    setLoading(true);
    setUploading(true); // Mulai unggahan
    const res = await editVideo(token, id, updateData);
    setLoading(false);
    setUploading(false); // Selesai unggahan
    if (res) {
      console.log("Video updated:", res);
      setPopupText("Video Berhasil Diupdate");
      setPopupType("success");
      setShowPopup(true);
      setTimeout(() => {
        router.push("/video");
      }, 1500);
    } else {
      console.log("Failed to update video");
      setPopupText("Video Gagal Diupdate");
      setPopupType("error");
      setShowPopup(true);
    }
  };

  useEffect(() => {
    if (id && token) {
      const fetchVideo = async () => {
        try {
          const data = await getVideosById(token, id);
          setTitle(data.title);
          setTitleSm(data.titleSm);
          setSubtitleSm(data.subtitleSm);
          setDescription(data.content);
          setInputDate(data.inputDate);
          setVideo(data.video);
        } catch (err) {
          console.error(err);
        }
      };

      fetchVideo();
    }
  }, [id, token]);

  const handleFileChangeVideo = (e) => {
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
            {isAdmin ? "Update Video" : "Update Video"}
          </h2>
        </div>
        <div className="mt-1"></div>
        <div className="bg-primary h-[2px] mb-4"></div>
        <div className="flex flex-col text-base items-start justify-start">
          <form
            className="flex flex-col w-full"
            encType="multipart/form-data"
            onSubmit={handleEditVideo}
          >
            <div className="mb-6 flex flex-col">
              <label className="mb-2 text-sm font-medium text-black">
                Judul : <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="p-2 border-gray-300 border rounded-md w-full transition-colors duration-300 hover:border-primary"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-6 flex flex-col">
              <label className="mb-2 text-sm font-medium text-black">
                Nama Penulis : <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="p-2 border-gray-300 border rounded-md w-full transition-colors duration-300 hover:border-primary"
                value={titleSm}
                onChange={(e) => setTitleSm(e.target.value)}
              />
            </div>
            <div className="mb-6 flex flex-col">
              <label className="mb-2 text-sm font-medium text-black">
                Subjudul : <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="p-2 border-gray-300 border rounded-md w-full transition-colors duration-300 hover:border-primary"
                value={subtitleSm}
                onChange={(e) => setSubtitleSm(e.target.value)}
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
                ref={quillRef}
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
                value={inputDate}
                onChange={(e) => setInputDate(e.target.value)}
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
                onChange={handleFileChangeVideo}
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

export default UpdateVideo;

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import PopUp from "@/components/Popup";
import { editBlog, getBlogsById } from "@/services/blog";
import "quill/dist/quill.snow.css";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const UpdateBlog = ({ id, isAdmin }) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [titleSm, setTitleSm] = useState("");
  const [subtitleSm, setSubtitleSm] = useState("");
  const [content, setDescription] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [popupType, setPopupType] = useState("");
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
    if (image) updateData.image = image;
    if (inputDate) updateData.inputDate = inputDate;
    const res = await editBlog(token, id, updateData);
    if (res) {
      console.log("Video updated:", res);
      setPopupText("Blog Berhasil Diupdate");
      setPopupType("success");
      setShowPopup(true);
      setTimeout(() => {
        router.push("/manage-blog");
      }, 1500);
    } else {
      console.log("Failed to update video");
      setPopupText("Blog Gagal Diupdate");
      setPopupType("error");
      setShowPopup(true);
    }
  };

  useEffect(() => {
    if (id && token) {
      const fetchVideo = async () => {
        try {
          const data = await getBlogsById(token, id);
          setTitle(data.title);
          setTitleSm(data.titleSm);
          setSubtitleSm(data.subtitleSm);
          setDescription(data.content);
          setInputDate(data.inputDate);
        } catch (err) {
          console.error(err);
        }
      };

      fetchVideo();
    }
  }, [id, token]);

  const handleFileChangeFoto = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <main>
      <PopUp text={popupText} isOpen={showPopup} type={popupType} />
      <div className="mt-2 bg-white p-4 shadow-sm rounded-md max-w-7xl mx-auto">
        <div className="flex mb-4 items-center">
          <div className="text-primary hover:opacity-90">
            <Link href="/manage-blog">
              <Icon
                icon="iconamoon:arrow-left-5-circle-fill"
                className="h-9 w-9 flex items-center justify-center text-center"
              />
            </Link>
          </div>
          <h2 className="text-black ml-2 text-2xl font-semibold">
            {isAdmin ? "Update Blog" : "Update Blog"}
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
                Judul Halaman : <span className="text-red-500">*</span>
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
                Cover : <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                id="foto"
                name="foto"
                accept="image/*"
                className="p-2 border-gray-300 border rounded-md w-full transition-colors duration-300 hover:border-primary"
                onChange={handleFileChangeFoto}
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

export default UpdateBlog;

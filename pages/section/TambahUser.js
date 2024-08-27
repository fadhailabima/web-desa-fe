import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { addUser } from "@/services/auth";
import PopUp from "@/components/Popup";
import { FaEye } from "react-icons/fa";

const TambahUser = ({ isAdmin }) => {
  const [loading, setLoading] = useState(false);
  const [nama, setNama] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [see, setSee] = useState(false);
  const [error, setError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [popupType, setPopupType] = useState("");
  const router = useRouter();

  const handleAddUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem("token");
    const res = await addUser(token, nama, username, password);
    setLoading(false);
    if (res) {
      console.log("Semester added:", res);
      setPopupText("User Berhasil Ditambah");
      setPopupType("success");
      setShowPopup(true);
      setTimeout(() => {
        router.push("/manage-user"); // Change route to "/manage-produk"
      }, 1500);
    } else {
      console.log("Failed to add nama");
      setPopupText("User Gagal Ditambah");
      setPopupType("failed");
      setShowPopup(true);
    }
  };

  return (
    <main className="mt-2 bg-white p-4 min-w-[50vw] shadow-sm rounded-md max-w-7xl mx-auto">
      <PopUp text={popupText} isOpen={showPopup} type={popupType} />
      <div className="sm:p-2">
        <div className="flex mb-4 items-center">
          <div className="text-primary hover:opacity-90">
            <Link href="/manage-wisata">
              <Icon
                icon="iconamoon:arrow-left-5-circle-fill"
                className="h-9 w-9 flex items-center justify-center text-center"
              />
            </Link>
          </div>
          <h2 className="text-black ml-2 text-2xl font-semibold">
            {isAdmin ? "Tambah User" : "Tambah User"}
          </h2>
        </div>
        <div className="mt-1"></div>
        <div className="bg-primary h-px mb-4"></div>
        <div className="flex flex-col text-base items-start justify-start">
          <form
            className="flex flex-col w-full"
            onSubmit={(e) => handleAddUser(e)}
          >
            <div className="mb-6 flex flex-col">
              <label className="mb-2 text-sm font-medium text-black">
                Nama User
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="p-2 border-gray-300 border rounded-md w-full transition-colors duration-300 hover:border-primary"
                placeholder="Nama User"
                onChange={(e) => setNama(e.target.value)}
                required
              />
            </div>
            <div className="mb-6 flex flex-col">
              <label className="mb-2 text-sm font-medium text-black">
                Username
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="p-2 border-gray-300 border rounded-md w-full transition-colors duration-300 hover:border-primary"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-6 flex flex-col relative">
              <label className="mb-2 text-sm font-medium text-black">
                Password
                <span className="text-red-500">*</span>
              </label>
              <input
                type={see ? "text" : "password"}
                className="p-2 border-gray-300 border rounded-md w-full transition-colors duration-300 hover:border-primary pr-10"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-4 cursor-pointer mt-6 bg-transparent text-gray-300"
                onClick={() => setSee(!see)}
              >
                <FaEye />
              </button>
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

export default TambahUser;

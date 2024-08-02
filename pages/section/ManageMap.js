import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getMap, deleteMap } from "@/services/map";
import DeletePopup from "@/components/DeletePopup";
import PopUp from "@/components/Popup";

const ManageMap = ({ id, isAdmin }) => {
  const [lokasi, setLokasi] = useState([]);
  const [catloc, setCatloc] = useState("");
  const router = useRouter();
  const [deletePopupVisible, setDeletePopupVisible] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [token, setToken] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [popupType, setPopupType] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  useEffect(() => {
    if (id && token) {
      const fetchMap = async () => {
        try {
          const data = await getMap(token, id);
          setLokasi(data.lokasi);
          setCatloc(data.kategori_lokasi);
        } catch (err) {
          console.error(err);
        }
      };

      fetchMap();
    }
  }, [id, token]);

  const showDeletePopup = (id) => {
    setUserToDelete(id);
    setDeletePopupVisible(true);
  };

  const handleDeleteMap = async () => {
    if (token) {
      try {
        const res = await deleteMap(token, userToDelete);
        setPopupText("Map Berhasil Dihapus");
        setPopupType("success");
        setShowPopup(true);
        setDeletePopupVisible(false);
        setUserToDelete(null);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } catch (error) {
        setPopupText("Map Gagal Dihapus");
        setPopupType("error");
        setShowPopup(true);
      }
    }
  };

  const handleCancelDelete = () => {
    setDeletePopupVisible(false);
    setUserToDelete(null);
  };

  return (
    <main>
      <PopUp text={popupText} isOpen={showPopup} type={popupType} />
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">
            {isAdmin ? `Manage Map - ${catloc}` : `Manage Map - ${catloc}`}
          </h2>
          <div className="flex space-x-4">
            <Link href={`/tambahMap/${id}`}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Tambah Map
              </button>
            </Link>
            <Link href={"/kategori-map"}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ManageMap;

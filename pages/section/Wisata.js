import React, { useEffect, useState } from "react";
import Link from "next/link";
import PopUp from "@/components/Popup";
import { getKategori, deleteKategori } from "@/services/wisata";
import DeletePopup from "@/components/DeletePopup";
import { useRouter } from "next/router";

const ManageWisata = ({ isAdmin }) => {
  const [kategori, setKategori] = useState([]);
  const [deletePopupVisible, setDeletePopupVisible] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [popupType, setPopupType] = useState("");
  const router = useRouter();

  const getAllKategori = async (token) => {
    const res = await getKategori(token);
    if (res) {
      setKategori(res);
    } else {
      console.log("Failed to get divisi");
    }
  };
  console.log(kategori, "bismillah");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getAllKategori(token);
    } else {
      router.push("/login");
    }
  }, []);

  const showDeletePopup = (id) => {
    setUserToDelete(id);
    setDeletePopupVisible(true);
  };

  const deleteKategoriHandler = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const res = await deleteKategori(token, userToDelete);
        console.log("Divisi deleted successfully");
        setPopupText("Kategori Berhasil Dihapus");
        setPopupType("success");
        setShowPopup(true);
        setDeletePopupVisible(false);
        setUserToDelete(null);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } catch (error) {
        console.log("Failed to delete kabinet");
        setPopupText("Kategori Gagal Dihapus");
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
      <div className="flex-1 max-h-full p-5">
        <div className="flex flex-col justify-between items-center space-y-6 md:flex-row md:space-y-0">
          <h2 className="text-gray-500 mt-6 text-xl text-center font-semibold pb-1">
            {isAdmin ? "Manage Wisata" : "Manage Wisata"}
          </h2>
          <div className="dashboard-button-area">
            <Link href="/tambahKategori">
              <button className="mt-6 border-white border px-2.5 py-1 rounded-md bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white hover:bg-gray-100 hover:text-black ml-2.5">
                Tambah Kategori
              </button>
            </Link>
          </div>
        </div>
        <div className="p-5">
          <div className="content-manage flex flex-col mt-6">
            <div className="table-container -mx-6 -my-2 overflow-x-auto">
              <div className="table-wrapper inline-block min-w-full px-6 py-2 align-middle">
                <div className="table-inner-wrapper overflow-hidden border-b border-gray-200 rounded-md shadow-md">
                  <table className="product-table min-w-full overflow-x-scroll table-auto w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-center py-3 text-xs font-medium tracking-wider text-black uppercase">
                          No
                        </th>
                        <th className="text-center py-3 text-xs font-medium tracking-wider text-black uppercase">
                          Nama Kategori
                        </th>
                        <th className="text-center py-3 text-xs font-medium tracking-wider text-black uppercase">
                          Action 1
                        </th>
                        <th className="text-center py-3 text-xs font-medium tracking-wider text-black uppercase">
                          Action 2
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {kategori &&
                        kategori.map((item, i) => (
                          <tr
                            key={i}
                            className="transition-all duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg"
                          >
                            <td className="text-center py-4 text-sm text-black">
                              <span className="break-word">{i + 1}</span>
                            </td>
                            <td className="text-center py-4 text-sm text-black">
                              <span className="break-word">
                                {item.kategori}
                              </span>
                            </td>
                            <td className="text-center py-4 text-sm text-black">
                              <Link href={`/manage-fasilitas/${item.id}`}>
                                <button className="link-button">
                                  Lihat Detail
                                </button>
                              </Link>
                            </td>
                            <td className="text-center py-4 text-sm text-black">
                              <button
                                className="delete-button border border-gray-200 py-2 px-4 rounded-md bg-gradient-to-r from-red-500 to-red-700 text-white hover:bg-white hover:text-black"
                                onClick={() => showDeletePopup(item.id)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      {deletePopupVisible && (
                        <DeletePopup
                          onConfirm={deleteKategoriHandler}
                          onCancel={handleCancelDelete}
                        />
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ManageWisata;

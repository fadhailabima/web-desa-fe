import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getWisata, deleteWisata } from "@/services/wisata";
import DeletePopup from "@/components/DeletePopup";
import PopUp from "@/components/Popup";

const ManageFasilitas = ({ id, isAdmin }) => {
  const [wisata, setWisata] = useState([]);
  const [namaKategori, setNamaKategori] = useState("");
  const router = useRouter();
  const [deletePopupVisible, setDeletePopupVisible] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [popupType, setPopupType] = useState("");
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    if (id && token) {
      const fetchStaff = async () => {
        try {
          const data = await getWisata(token, id);
          console.log(data, "Data");
          setWisata(data.facilities);
          setNamaKategori(data.kategori);
        } catch (err) {
          console.error(err);
        }
      };

      fetchStaff();
    }
  }, [id, token]);

  const showDeletePopup = (id) => {
    setUserToDelete(id);
    setDeletePopupVisible(true);
  };

  const handleDeleteWisata = async () => {
    if (token) {
      try {
        const res = await deleteWisata(token, userToDelete);
        console.log("Staff deleted successfully");
        setPopupText("Fasilitas Berhasil Dihapus");
        setPopupType("success");
        setShowPopup(true);
        setDeletePopupVisible(false);
        setUserToDelete(null);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } catch (error) {
        console.log("Failed to delete wisata");
        setPopupText("Fasilitas Gagal Dihapus");
        setPopupType("error");
        setShowPopup(true);
      }
    }
  };

  const handleCancelDelete = () => {
    setDeletePopupVisible(false);
    setUserToDelete(null);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [searchTerm, setSearchTerm] = useState("");

  const searchTermLower = searchTerm?.toLowerCase() || "";

  const filteredItems = wisata?.filter((item) =>
    item.nama?.toLowerCase().includes(searchTermLower)
  );
  const totalPages = Math.ceil((filteredItems?.length ?? 0) / itemsPerPage);
  const currentItems = filteredItems?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <main>
      <PopUp text={popupText} isOpen={showPopup} type={popupType} />
      <div className="flex-1 max-h-full p-5">
        <div className="flex flex-col justify-between items-center space-y-6 md:flex-row md:space-y-0">
          <h2 className="text-gray-500 mt-6 text-xl text-center font-semibold pb-1">
            {isAdmin
              ? `Manage Fasilitas - ${namaKategori}`
              : `Manage Fasilitas - ${namaKategori}`}
          </h2>
          <input
            type="text"
            className="mt-6 border-black border px-2.5 py-2.5 rounded-md w-full max-w-xs transition-all duration-300 ease-in-out focus:border-blue-500 focus:shadow-outline-blue focus:scale-105"
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex space-x-4">
            <Link href={`/tambahFasilitas/${id}`}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Tambah Fasilitas
              </button>
            </Link>
            <Link href={"/manage-wisata"}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Back
              </button>
            </Link>
          </div>
        </div>
        <div className="">
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
                          Title
                        </th>
                        <th className="text-center py-3 text-xs font-medium tracking-wider text-black uppercase">
                          TitleSm
                        </th>
                        <th className="text-center py-3 text-xs font-medium tracking-wider text-black uppercase">
                          Subtitle
                        </th>
                        <th className="text-center py-3 text-xs font-medium tracking-wider text-black uppercase">
                          Content
                        </th>
                        <th className="text-center py-3 text-xs font-medium tracking-wider text-black uppercase">
                          Cover
                        </th>
                        <th className="text-center py-3 text-xs font-medium tracking-wider text-black uppercase">
                          Created Date
                        </th>
                        <th className="text-center py-3 text-xs font-medium tracking-wider text-black uppercase">
                          Update
                        </th>
                        <th className="text-center py-3 text-xs font-medium tracking-wider text-black uppercase">
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {currentItems &&
                        currentItems.map((item, i) => (
                          <tr
                            key={i}
                            className="transition-all duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg"
                          >
                            <td className="text-center py-4 text-sm text-black">
                              <span className="break-word">{i + 1}</span>
                            </td>
                            <td className="text-center py-4 text-sm text-black">
                              <span className="break-word">{item.title}</span>
                            </td>
                            <td className="text-center py-4 text-sm text-black">
                              <span className="break-word">{item.titleSm}</span>
                            </td>
                            <td className="text-center py-4 text-sm text-black">
                              <span className="break-word">
                                {item.subtitleSm}
                              </span>
                            </td>
                            <td className="text-center py-4 text-sm text-black">
                              <button
                                className="view-description-button border-none border-b border-black text-blue-500 bg-none cursor-pointer"
                                onClick={() =>
                                  handleViewDescription(item.content)
                                }
                              >
                                Lihat Deskripsi
                              </button>
                            </td>
                            <td className="text-center py-4 text-sm text-black">
                              <img
                                src={item.image_url}
                                alt="Cover"
                                className="w-12 h-12"
                              />
                            </td>
                            <td className="text-center py-4 text-sm text-black">
                              {item.inputDate}
                            </td>
                            <td className="text-center py-4 text-sm text-black">
                              <Link href={`/updateFasilitas/${item.id}`}>
                                <button className="link-button">Update</button>
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
                          onConfirm={deleteWisata}
                          onCancel={handleCancelDelete}
                        />
                      )}
                    </tbody>
                  </table>
                  <div className="pagination flex justify-between items-center mt-2">
                    <button
                      className="pagination-button m-2 border border-gray-200 py-2 px-4 rounded-md transition duration-300 bg-gradient-to-r from-gray-400 to-gray-600 text-white hover:bg-gray-100 hover:text-black disabled:bg-gray-300 disabled:cursor-not-allowed"
                      onClick={() =>
                        setCurrentPage((old) => Math.max(old - 1, 1))
                      }
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                    <button
                      className="pagination-button m-2 border border-gray-200 py-2 px-4 rounded-md transition duration-300 bg-gradient-to-r from-gray-400 to-gray-600 text-white hover:bg-gray-100 hover:text-black disabled:bg-gray-300 disabled:cursor-not-allowed"
                      onClick={() =>
                        setCurrentPage((old) => Math.min(old + 1, totalPages))
                      }
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ManageFasilitas;

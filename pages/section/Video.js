import React, { useEffect, useState } from "react";
import Link from "next/link";
import PopUp from "@/components/Popup";
import DeletePopup from "@/components/DeletePopup";
import { useRouter } from "next/router";
import { getVideo, deleteVideo } from "@/services/video";

const Video = ({ isAdmin }) => {
  const [video, setVideo] = useState([]);
  const [deletePopupVisible, setDeletePopupVisible] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [popupType, setPopupType] = useState("");
  const router = useRouter();

  const getVideoData = async (token) => {
    const res = await getVideo(token);
    if (res) {
      setVideo(res);
    } else {
      console.log("Failed to get users");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getVideoData(token);
    } else {
      router.push("/login");
    }
  }, [router]);

  const showDeletePopup = (id) => {
    setUserToDelete(id);
    setDeletePopupVisible(true);
  };

  const deleteVideoHandler = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const res = await deleteVideo(token, userToDelete);
        console.log("IOS deleted successfully");
        setDeletePopupVisible(false);
        setUserToDelete(null);
        setPopupText("Blog Berhasil Dihapus");
        setPopupType("success");
        setShowPopup(true);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } catch (error) {
        console.log("Failed to delete IOS");
        setPopupText("Blog Gagal Dihapus");
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

  const filteredItems = video?.filter((item) =>
    item.title?.toLowerCase().includes(searchTermLower)
  );
  const totalPages = Math.ceil((filteredItems?.length ?? 0) / itemsPerPage);
  const currentItems = filteredItems?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleViewDescription = (content) => {
    const newWindow = window.open();
    newWindow.document.write(content);
    newWindow.document.close();
  };

  return (
    <main>
      <PopUp text={popupText} isOpen={showPopup} type={popupType} />
      <div className="flex-1 max-h-full p-5">
        <div className="flex flex-col justify-between items-center space-y-6 md:flex-row md:space-y-0">
          <h2 className="text-gray-500 mt-6 text-xl text-center font-semibold pb-1">
            {isAdmin ? "Manage Video" : "Manage Video"}
          </h2>
          <input
            type="text"
            className="mt-6 border-black border px-2.5 py-2.5 rounded-md w-full max-w-xs transition-all duration-300 ease-in-out focus:border-blue-500 focus:shadow-outline-blue focus:scale-105"
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="dashboard-button-area">
            <Link href="/tambahVideo">
              <button className="mt-6 border-white border px-2.5 py-1 rounded-md bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white hover:bg-gray-100 hover:text-black ml-2.5">
                Tambah Video
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
                          Title
                        </th>
                        <th className="text-center py-3 text-xs font-medium tracking-wider text-black uppercase">
                          TitleSm
                        </th>
                        <th className="text-center py-3 text-xs font-medium tracking-wider text-black uppercase">
                          Subtitle
                        </th>
                        <th className="text-center py-3 text-xs font-medium tracking-wider text-black uppercase">
                          Description
                        </th>
                        <th className="text-center py-3 text-xs font-medium tracking-wider text-black uppercase">
                          Link Video
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
                              <span className="break-word">{item.video}</span>
                            </td>
                            <td className="text-center py-4 text-sm text-black">
                              {item.inputDate}
                            </td>
                            <td className="text-center py-4 text-sm text-black">
                              <Link href={`/updateVideo/${item.id}`}>
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
                          onConfirm={deleteVideoHandler}
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

export default Video;

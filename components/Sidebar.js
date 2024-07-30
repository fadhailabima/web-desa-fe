import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import LogoutPopup from "@/components/LogoutPopup";
import { logout } from "@/services/auth";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const router = useRouter();
  const [showLogoutPopup, setShowLogoutPopup] = React.useState(false);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Token not found in local storage");
        return;
      }

      const res = await logout(token);

      if (res) {
        console.log("Logout successful");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        router.push("/login");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <button
        className="menu-button fixed top-8 left-4 bg-transparent border-none cursor-pointer z-50 lg:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Icon icon="lucide:menu" width="24" height="24" />
      </button>
      <div
        className={`sidebar fixed bg-white h-screen w-64 transform transition-transform duration-300 ease-in-out z-40 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:w-80 lg:translate-x-0`}
      >
        <div className="flex flex-col gap-6 w-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-white">
          <div className="flex justify-between items-center p-4">
            <img
              src="https://pub-edda528035cd4ca0bd9748f53558db9c.r2.dev/public%2Fassets%2Fimages%2Flogo.png"
              className="w-24 h-auto"
              alt="Logo"
            />
            <button
              className="menu-button bg-transparent border-none cursor-pointer lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <Icon icon="lucide:x" width="24" height="24" />
            </button>
          </div>
          <div className="flex flex-col gap-5 px-4 py-2">
            <Link
              href="/dashboard"
              className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100"
            >
              <Icon icon="lucide:home" width="24" height="24" />
              <span className="font-semibold text-xl">Home</span>
            </Link>
            <Link
              href="/manageIos"
              className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100"
            >
              <Icon icon="lucide:newspaper" width="24" height="24" />
              <span className="font-semibold text-xl">Video</span>
            </Link>
            <Link
              href="/manageKabinet"
              className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100"
            >
              <Icon icon="lucide:users" width="24" height="24" />
              <span className="font-semibold text-xl">Blog</span>
            </Link>
            <Link
              href="/manageDMW"
              className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100"
            >
              <Icon icon="lucide:folder-plus" width="24" height="24" />
              <span className="font-semibold text-xl">Explore Wisata</span>
            </Link>
            <div className="flex flex-col gap-9 w-full">
              <button
                className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100"
                onClick={() => setShowLogoutPopup(true)}
              >
                <Icon icon="lucide:arrow-left-square" width="24" height="24" />
                <span className="font-semibold text-xl">Logout</span>
              </button>
            </div>
            {showLogoutPopup && (
              <LogoutPopup
                onConfirm={() => {
                  handleLogout();
                  setShowLogoutPopup(false);
                }}
                onCancel={() => setShowLogoutPopup(false)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

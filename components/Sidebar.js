import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import LogoutPopup from "@/components/LogoutPopup";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
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
      <div className="md:w-60 bg-white h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex">
        <div className="flex flex-col space-y-6 w-full">
          <div className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b border-zinc-200 h-14 w-full">
            <img
              src="kkn-logo.png"
              style={{ width: "50px", height: "50px" }}
            />
          </div>
          <div className="flex flex-col space-y-5  md:px-4 ">
            <Link
              href="/dashboard"
              className="flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100"
            >
              <Icon icon="lucide:home" width="24" height="24" />
              <span className="font-semibold text-xl flex">Home</span>
            </Link>
            <Link
              href="/video"
              className="flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100"
            >
              <Icon icon="lucide:video" width="24" height="24" />
              <span className="font-semibold text-xl flex">Manage Video</span>
            </Link>
            <Link
              href="/manage-blog
            "
              className="flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100"
            >
              <Icon icon="lucide:file-pen" width="24" height="24" />
              <span className="font-semibold text-xl flex">Manage Blog</span>
            </Link>
            <Link
              href="/manage-map
            "
              className="flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100"
            >
              <Icon icon="lucide:map-pin-plus" width="24" height="24" />
              <span className="font-semibold text-xl flex">Manage Map</span>
            </Link>
            <Link
              href="/manage-wisata
            "
              className="flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100"
            >
              <Icon icon="lucide:circle-fading-plus" width="24" height="24" />
              <span className="font-semibold text-xl flex">Manage Wisata</span>
            </Link>
            <div className="flex flex-col space-y-9 w-full">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex flex-row space-x-2 items-center p-2 rounded-lg hover:bg-zinc-100"
                  >
                    <Icon
                      icon="lucide:arrow-left-square"
                      width="24"
                      height="24"
                    />
                    <span className="font-semibold text-xl flex">Logout</span>
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Apakah anda yakin ingin keluar ?
                    </AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

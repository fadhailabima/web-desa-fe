import React from "react";
import Link from "next/link";
// import { useSelectedLayoutSegment } from "next/navigation"; // Commented out if not used
import { useRouter } from "next/router"; // Import the useRouter hook

const Header = () => {
  // const selectedLayout = useSelectedLayoutSegment(); // Commented out if not used
  const router = useRouter();

  return (
    <div
      className={`sticky left-0 right-0 top-0 z-30 w-full transition-all duration-200 ease-in-out border-b border-gray-300 ${
        // selectedLayout ? "bg-white border-b border-gray-300" : ""
        router.pathname !== "/" ? "bg-white border-b border-gray-300" : ""
      }`}
    >
      <div className="flex items-center justify-center h-14 px-4">
        <div className="hidden md:block">
          <span className="font-semibold text-pink-600 text-sm">
            Desa Wisata Punjulharjo
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
import React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation"; // Commented out if not used
import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200`,
        {
          "border-b border-gray-200 bg-white/75 backdrop-blur-lg": scrolled,
          "border-b border-gray-200 bg-white": selectedLayout,
        }
      )}
      style={{zIndex: 50}}
    >
      <div className="flex h-[55px] items-center justify-center px-4">
        <div className="hidden md:block">
          <span className="font-semibold text-sm text-green-600">
            Desa Wisata Punjulharjo
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;

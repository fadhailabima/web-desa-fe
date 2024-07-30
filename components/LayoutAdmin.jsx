import Sidebar from "./Sidebar";
import React, { useEffect } from "react";
import Header from "./Admin/Header";
import PageWrapper from "./pageWrapper";
import MarginWidthWrapper from "./margin-width-wrapper";

export default function LayoutAdmin({ children, includeHeader = true }) {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <MarginWidthWrapper>
          {includeHeader && <Header />}
          <PageWrapper>{children}</PageWrapper>
        </MarginWidthWrapper>
      </main>
    </div>
  );
}
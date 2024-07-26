import Sidebar from "./Sidebar";
import React, { useEffect } from "react";
import Header from "./Header";
import PageWrapper from "./pageWrapper";
import MarginWidthWrapper from "./margin-width-wrapper";

export default function LayoutProtected({ children }) {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    /*     const handleKeyDown = (event) => {
      if (
        (event.ctrlKey && (event.key === 'u' || event.key === 'U' || event.shiftKey && event.key === 'I')) ||
        event.key === 'F12'
      ) {
        event.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
 */
  }, []);

  return (
    <div>
      <Sidebar />
      <main className="flex-1">
        <MarginWidthWrapper>
          <Header />
          <PageWrapper>{children}</PageWrapper>
        </MarginWidthWrapper>
      </main>
    </div>
  );
}

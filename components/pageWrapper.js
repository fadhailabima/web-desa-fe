import React from "react";

export default function PageWrapper({ children }) {
  return (
    <div className="flex flex-col p-4 bg-gray-100 flex-grow gap-2 space-y-2">
      {children}
    </div>
  );
}

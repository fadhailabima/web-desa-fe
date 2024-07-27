import React from "react";

export default function MarginWidthWrapper({ children }) {
    return <div className="flex flex-col min-h-screen md:ml-60 sm:border-r border-gray-600">{children}</div>;
}

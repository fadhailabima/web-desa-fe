import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const PopUp = dynamic(() => import("@/components/Popup"), { ssr: false });

const Dashboard = ({ isAdmin }) => {
  const [popupText, setPopupText] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState("");

  return (
    <main className="flex-1 max-h-full p-5">
      <div className="flex flex-col items-start justify-between pb-6 gap-4 border-b border-gray-300 lg:flex-row lg:items-center lg:gap-0">
        <h1 className="text-3xl font-semibold whitespace-nowrap">
          Admin Dashboard
        </h1>
      </div>
      <PopUp text={popupText} isOpen={showPopup} type={popupType} />
      <div className="grid grid-cols-3 gap-6 mt-8 w-full">
        <div className="w-full overflow-hidden">
          {/* <Chart
            options={polarAreaChartOptions}
            series={polarAreaChartSeries}
            type="polarArea"
            height={350}
          /> */}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
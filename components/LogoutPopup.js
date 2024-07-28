// components/LogoutPopup.jsx
import React from "react";

const LogoutPopup = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-lg font-semibold">Confirm Logout</h2>
        <p>Are you sure you want to logout?</p>
        <div className="flex justify-end gap-4 mt-4">
          <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={onConfirm}>
            Yes
          </button>
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutPopup;
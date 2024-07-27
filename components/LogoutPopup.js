import React from "react";

const LogoutPopup = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50 overflow-hidden">
      <div className="bg-white p-5 rounded-lg text-center max-w-4/5 sm:max-w-9/10 xs:max-w-95 overflow-hidden relative z-50">
        <h1 className="text-3xl font-bold mb-6">
          Apakah Anda Yakin Ingin Keluar?
        </h1>
        <div className="flex justify-center space-x-2.5">
          <button
            className="border border-black px-5 py-2.5 rounded-md cursor-pointer bg-green-500"
            onClick={onConfirm}
          >
            Ya
          </button>
          <button
            className="border border-black px-5 py-2.5 rounded-md cursor-pointer bg-red-500"
            onClick={onCancel}
          >
            Tidak
          </button>
        </div>
      </div>
      <div className="fixed inset-0 bg-transparent z-40"></div>
    </div>
  );
};

export default LogoutPopup;

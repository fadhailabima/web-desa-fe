import React from "react";

const DeletePopup = ({ onConfirm, onCancel }) => {
  return (
    <>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-5 rounded-md w-9/10 max-w-xs sm:w-7/10 sm:p-8 lg:w-1/2 lg:p-10">
        <h1 className="text-3xl font-bold mb-6 text-center sm:text-4xl lg:text-5xl">
          Apakah Anda Yakin Ingin Menghapus Data Ini?
        </h1>
        <div className="flex justify-center space-x-2.5">
          <button
            className="border-black border px-5 py-2.5 rounded-md hover:bg-white bg-green-400 sm:px-6 sm:py-3.5 lg:px-8 lg:py-4"
            onClick={onConfirm}
          >
            Ya
          </button>
          <button
            className="border-black border px-5 py-2.5 rounded-md hover:bg-white bg-red-500 sm:px-6 sm:py-3.5 lg:px-8 lg:py-4"
            onClick={onCancel}
          >
            Tidak
          </button>
        </div>
      </div>
      <div className="z-40 bg-black fixed opacity-50 top-0 left-0 w-full h-full"></div>
    </>
  );
};

export default DeletePopup;

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { loginapi } from "@/services/auth";
import { FaEye } from "react-icons/fa";
import PopUp from "@/components/Popup";

const login = () => {
  const [signIn, setSignIn] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [see, setSee] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [popupType, setPopupType] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(5);
  const [lockoutTime, setLockoutTime] = useState(null);
  const [isLockedOut, setIsLockedOut] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isLockedOut) {
      const lockoutTimer = setTimeout(() => {
        setIsLockedOut(false);
        setLoginAttempts(5);
        setPopupText("Anda bisa mencoba login kembali.");
        setPopupType("success");
        setIsPopupOpen(true);
      }, 60000);

      return () => clearTimeout(lockoutTimer);
    }
  }, [isLockedOut]);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (isLockedOut) {
      setPopupText(
        "Anda telah terkunci. Harap tunggu 1 menit sebelum mencoba lagi."
      );
      setPopupType("error");
      setIsPopupOpen(true);
      return;
    }

    try {
      const res = await loginapi(username, password);
      if (res) {
        console.log("Login successful");
        localStorage.setItem("token", res.token);
        sessionStorage.setItem("showPopup", "true");

        setPopupText("Login successful");
        setPopupType("success");
        setIsPopupOpen(true);

        setTimeout(() => {
          router.push("/dashboard");
        }, 1500);
      }
    } catch (error) {
      setLoginAttempts((prev) => prev - 1);
      console.error("Login failed", error);
      if (loginAttempts - 1 === 0) {
        setPopupText(
          "Anda telah mencapai batas maksimum percobaan login. Harap tunggu 1 menit."
        );
        setPopupType("error");
        setIsLockedOut(true);
      } else {
        setPopupText(
          `Login failed. Please check your username and password. Sisa ${
            loginAttempts - 1
          } Kesempatan Login.`
        );
        setPopupType("error");
      }
      setIsPopupOpen(true);
    }
  };

  useEffect(() => {
    if (isPopupOpen) {
      const timer = setTimeout(() => {
        setIsPopupOpen(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isPopupOpen]);

  if (isMobile) {
    return (
      <div className="flex justify-center items-center h-screen text-center text-blue-900 p-5 bg-gradient-to-r from-blue-500 to-green-500">
        <h1 className="text-xl font-semibold">
          👋 Hello, please use a laptop to access this site!
        </h1>
      </div>
    );
  }

  return (
    <div
      className="font-montserrat flex justify-center items-center w-screen h-screen relative text-blue-900 bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url("https://pub-edda528035cd4ca0bd9748f53558db9c.r2.dev/public%2Fassets%2Fimages%2Fbackground.jpg")`,
      }}
    >
      <form
        onSubmit={handleLogin}
        className="bg-white p-10 rounded-xl w-100 shadow-2xl"
      >
        <div className="flex justify-between mb-4">
          <h1 className="text-xl font-bold">Login</h1>
          <img src="/kkn-logo.png" alt="hmif logo" className="w-24" />
        </div>
        <div className="mb-4">
          <h1 className="text-base font-semibold bg-gray-100 p-8 rounded-xl">
            Untuk info login silahkan hubungi penanggung jawab website wisata
            Desa Punjulharjo
          </h1>
        </div>
        <div className="w-full mb-8 space-y-4">
          <div className="flex flex-col items-start justify-center space-y-1">
            <p className="text-base font-medium">Username</p>
            <div className="relative w-full">
              <input
                type="text"
                className="p-2 text-base w-full border border-gray-300 bg-white rounded focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-300 hover:border-gray-500"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-center space-y-1">
            <p className="text-base font-medium">Password</p>
            <div className="relative w-full">
              <input
                type={see ? "text" : "password"}
                className="p-2 text-base w-full border border-gray-300 bg-white rounded focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-300 hover:border-gray-500"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute top-2.5 right-2 bg-transparent border-none text-3xl text-gray-300 flex justify-center items-center ml-2 cursor-pointer"
                onClick={() => setSee(!see)}
              >
                <FaEye />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="capitalize py-3 px-10 text-base rounded-full cursor-pointer border-none text-white font-bold bg-gradient-to-r from-blue-500 to-blue-600"
          >
            Login
          </button>
        </div>
      </form>
      <PopUp text={popupText} isOpen={isPopupOpen} type={popupType} />
    </div>
  );
};

export default login;

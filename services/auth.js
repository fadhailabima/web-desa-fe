import axios from "axios";

export const loginapi = async (username, password) => {
  try {
    const response = await axios.post("http://localhost:8000/api/login", {
      username: username,
      password: password,
    });

    // console.log(response.data);

    if (response.data.message === "Login Berhasil") {
      return response.data.data.user;
    } else if (
      response.data.message === "Kombinasi username dan password tidak valid."
    ) {
      throw new Error("Kombinasi username dan password tidak valid.");
    } else if (response.data.message === "Akun tidak aktif.") {
      throw new Error("Akun tidak aktif.");
    } else {
      throw new Error("Terjadi kesalahan dalam proses login");
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error("Kombinasi username dan password tidak valid.");
    } else {
      throw error;
    }
  }
};

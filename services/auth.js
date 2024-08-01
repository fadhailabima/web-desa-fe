import axios from "axios";

export const loginapi = async (username, password) => {
  try {
    const response = await axios.post(
      "https://apiku.desawisatapunjulharjo.com/api/login",
      {
        username: username,
        password: password,
      }
    );

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

export const logout = async (token) => {
  try {
    const response = await axios.post(
      "https://apiku.desawisatapunjulharjo.com/api/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data && response.data.message === "Logout berhasil") {
      return true; // Berhasil logout
    } else {
      throw new Error("Gagal melakukan logout");
    }
  } catch (error) {
    // Include the original error message in the thrown error
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "Terjadi kesalahan dalam proses logout";
    throw new Error(errorMessage);
  }
};

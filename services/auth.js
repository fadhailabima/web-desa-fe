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

export const getUser = async (token) => {
  try {
    const res = await axios.get(
      "https://apiku.desawisatapunjulharjo.com/api/users",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.data) {
      // console.log("Ios found :", res.data.data);
      return res.data.data;
    } else {
      // console.log("No Ios found");
      return null;
    }
  } catch (error) {
    console.error("An error occurred while getting all Ios:", error);
    return null;
  }
};

export const deleteUser = async (token, id) => {
  try {
    const res = await axios.delete(
      `https://apiku.desawisatapunjulharjo.com/api/user/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.data) {
      // console.log('Kabinet deleted:', res.data);
      return res.data; // return the response data
    } else {
      // console.log('No response from server');
      return null;
    }
  } catch (error) {
    console.error("An error occurred while deleting the kabinet:", error);
    return null;
  }
};

export const addUser = async (token, username, password) => {
  try {
    const res = await axios.post(
      `https://apiku.desawisatapunjulharjo.com/api/user`,
      {
        username: username,
        password: password,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.data) {
      // console.log("User added:", res.data);
      return res.data; // return the response data
    } else {
      // console.log("No response from server");
      return null;
    }
  } catch (error) {
    console.error("An error occurred while adding the user:", error);
    return null;
  }
};

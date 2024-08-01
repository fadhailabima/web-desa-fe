import axios from "axios";

export const getKategori = async (token) => {
  try {
    const res = await axios.get(
      "https://apiku.desawisatapunjulharjo.com/api/category",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.data) {
      // console.log('Divisi found:', res.data.data);
      return res.data.data; // return the user data
    } else {
      // console.log('No divisi found');
      return null;
    }
  } catch (error) {
    console.error("An error occurred while fetching the divisi:", error);
    throw error; // re-throw the error
  }
};

export const deleteKategori = async (token, id) => {
  try {
    const res = await axios.delete(
      `https://apiku.desawisatapunjulharjo.com/api/category/${id}`,
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

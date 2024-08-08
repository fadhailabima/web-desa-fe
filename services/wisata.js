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
      // console.log("Divisi found:", res.data.data);
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

export const addKategori = async (token, kategori) => {
  try {
    const res = await axios.post(
      "https://apiku.desawisatapunjulharjo.com/api/category",
      { kategori },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.data) {
      // console.log('Semester added:', res.data);
      return res.data; // return the response data
    } else {
      // console.log('No response from server');
      return null;
    }
  } catch (error) {
    console.error("An error occurred while adding the user:", error);
    return null;
  }
};

export const getWisata = async (token, category_id) => {
  try {
    const res = await axios.get(
      `https://apiku.desawisatapunjulharjo.com/api/facilities/${category_id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(res);
    if (res.data) {
      // console.log('Data found:', res.data.data);
      return res.data.data; // return the whole data object
    } else {
      // console.log('No data found');
      return null;
    }
  } catch (error) {
    console.error("An error occurred while fetching the data:", error);
    throw error; // re-throw the error
  }
};

export const createWisata = async (
  token,
  category_id,
  title,
  titleSm,
  subtitleSm,
  content,
  image
) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("titleSm", titleSm);
  formData.append("subtitleSm", subtitleSm);
  formData.append("content", content);
  formData.append("image", image);

  try {
    const res = await axios.post(
      `https://apiku.desawisatapunjulharjo.com/api/facilities/${category_id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (res.data) {
      return res.data;
    } else {
      return null;
    }
  } catch (error) {
    console.error("An error occurred while adding the Ios:", error);
    return null;
  }
};

export const deleteWisata = async (token, id) => {
  try {
    const res = await axios.delete(
      `https://apiku.desawisatapunjulharjo.com/api/facilities/${id}`,
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

import axios from "axios";

export const getKategoriMap = async (token) => {
  try {
    const res = await axios.get(
      "https://apiku.desawisatapunjulharjo.com/api/catlocs",
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

export const getKategoriMapPublic = async () => {
  try {
    const res = await axios.get(
      "https://apiku.desawisatapunjulharjo.com/api/catlocsPublic"
    );
    if (res.data) {
      return res.data.data; // return the user data
    } else {
      return null;
    }
  } catch (error) {
    console.error("An error occurred while fetching the divisi:", error);
    throw error; // re-throw the error
  }
};

export const deleteKategoriMap = async (token, id) => {
  try {
    const res = await axios.delete(
      `https://apiku.desawisatapunjulharjo.com/api/catlocs/${id}`,
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

export const addKategoriMap = async (token, kategori_lokasi) => {
  try {
    const res = await axios.post(
      "https://apiku.desawisatapunjulharjo.com/api/catlocs",
      { kategori_lokasi },
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

export const getMap = async (token, catlocs_id) => {
  try {
    const res = await axios.get(
      `https://apiku.desawisatapunjulharjo.com/api/locations/${catlocs_id}`,
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

export const getAllMap = async () => {
  try {
    const res = await axios.get(
      `https://apiku.desawisatapunjulharjo.com/api/locationsPublic`
    );
    if (res.data) {
      return res.data.data; // return the whole data object
    } else {
      return null;
    }
  } catch (error) {
    console.error("An error occurred while fetching the data:", error);
    throw error; // re-throw the error
  }
};

export const deleteMap = async (token, id) => {
  try {
    const res = await axios.delete(
      `https://apiku.desawisatapunjulharjo.com/api/locations/${id}`,
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

export const addMap = async (
  token,
  catlocs_id,
  nama_lokasi,
  latitude,
  longitude,
  foto_1,
  foto_2,
  foto_3
) => {
  try {
    const formData = new FormData();
    formData.append("nama_lokasi", nama_lokasi);
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);
    formData.append("foto_1", foto_1);
    formData.append("foto_2", foto_2);
    formData.append("foto_3", foto_3);

    const res = await axios.post(
      `https://apiku.desawisatapunjulharjo.com/api/locations/${catlocs_id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (res.data) {
      // console.log('Soal added:', res.data);
      return res.data; // return the response data
    } else {
      // console.log('No response from server');
      return null;
    }
  } catch (error) {
    console.error("An error occurred while adding the kabinet:", error);
    return null;
  }
};

export const getMapById = async (token, id) => {
  try {
    const res = await axios.get(
      `https://apiku.desawisatapunjulharjo.com/api/locationsById/${id}`,
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

export const getMapByIdPublic = async (id) => {
  try {
    const res = await axios.get(
      `https://apiku.desawisatapunjulharjo.com/api/locationsByIdPublic/${id}`
    );
    if (res.data) {
      return res.data.data; // return the whole data object
    } else {
      return null;
    }
  } catch (error) {
    console.error("An error occurred while fetching the data:", error);
    throw error; // re-throw the error
  }
};

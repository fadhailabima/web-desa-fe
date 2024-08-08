import axios from "axios";

export const getVideo = async (token) => {
  try {
    const res = await axios.get(
      "https://apiku.desawisatapunjulharjo.com/api/videos",
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

export const deleteVideo = async (token, id) => {
  try {
    const res = await axios.delete(
      `https://apiku.desawisatapunjulharjo.com/api/videos/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.data) {
      // console.log("Ios deleted:", res.data);
      return res.data;
    } else {
      // console.log("No response from server");
      return null;
    }
  } catch (error) {
    console.error("An error occurred while deleting the ios:", error);
    return null;
  }
};

export const createVideo = async (
  token,
  title,
  titleSm,
  subtitleSm,
  content,
  video,
  inputDate
) => {
  const data = {
    title,
    titleSm,
    subtitleSm,
    content,
    video,
    inputDate,
  };
  try {
    const res = await axios.post(
      "https://apiku.desawisatapunjulharjo.com/api/videos",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (res.data) {
      // console.log("Ios added:", res.data);
      return res.data;
    } else {
      // console.log("No response from server");
      return null;
    }
  } catch (error) {
    console.error("An error occurred while adding the Ios:", error);
    return null;
  }
};

export const editVideo = async (token, id, updateData) => {
  // Create a new object and add only the fields that are not null or undefined
  const filteredData = {};
  for (let key in updateData) {
    if (updateData[key] != null) {
      filteredData[key] = updateData[key];
    }
  }

  try {
    const res = await axios.post(
      `https://apiku.desawisatapunjulharjo.com/api/videos/${id}`,
      filteredData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (res.data) {
      return res.data; // return the response data
    } else {
      return null;
    }
  } catch (error) {
    console.error("An error occurred while updating the video:", error);
    return null;
  }
};

export const getVideosById = async (token, id) => {
  try {
    const res = await axios.get(
      `https://apiku.desawisatapunjulharjo.com/api/videos/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(res);
    if (res.data) {
      // console.log('Staff found:', res.data.data);
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

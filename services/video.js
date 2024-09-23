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
  const formData = new FormData();
  formData.append('title', title);
  formData.append('titleSm', titleSm);
  formData.append('subtitleSm', subtitleSm);
  formData.append('content', content);
  formData.append('video', video);
  formData.append('inputDate', inputDate);

  try {
    const res = await axios.post(
      "https://apiku.desawisatapunjulharjo.com/api/videos",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (res.data) {
      // console.log("Video added:", res.data);
      return res.data;
    } else {
      // console.log("No response from server");
      return null;
    }
  } catch (error) {
    console.error("An error occurred while adding the video:", error);
    return null;
  }
};

export const editVideo = async (token, id, updateData) => {
  const formData = new FormData();

  for (let key in updateData) {
    if (updateData[key] != null) {
      formData.append(key, updateData[key]);
    }
  }

  try {
    const res = await axios.post(
      `https://apiku.desawisatapunjulharjo.com/api/videos/${id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
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

export const getVideoAll = async () => {
  try {
    const res = await axios.get(
      "https://apiku.desawisatapunjulharjo.com/api/videosPublic"
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

export const getVideosPublicById = async (id) => {
  try {
    const res = await axios.get(
      `https://apiku.desawisatapunjulharjo.com/api/videosPublic/${id}`
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

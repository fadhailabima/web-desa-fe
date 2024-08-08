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

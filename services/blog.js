import axios from "axios";

export const getBlog = async (token) => {
  try {
    const res = await axios.get(
      "https://apiku.desawisatapunjulharjo.com/api/news",
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

export const deleteBlog = async (token, id) => {
  try {
    const res = await axios.delete(
      `https://apiku.desawisatapunjulharjo.com/api/news/${id}`,
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

export const createBlog = async (
  token,
  title,
  titleSm,
  subtitleSm,
  content,
  cover,
  inputDate
) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("titleSm", titleSm);
  formData.append("subtitleSm", subtitleSm);
  formData.append("content", content);
  formData.append("cover", cover);
  formData.append("inputDate", inputDate);
  try {
    const res = await axios.post("https://apiku.desawisatapunjulharjo.com/api/news", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
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

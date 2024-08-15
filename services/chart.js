import axios from "axios";

export const getStatCatlocs = async (token) => {
  try {
    const res = await axios.get(
      "https://apiku.desawisatapunjulharjo.com/api/countsCatlocs",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.data) {
      // console.log('BukuLinks found:', res.data.data);
      return res.data; // return the user data
    } else {
      // console.log('No bukulinks found');
      return null;
    }
  } catch (error) {
    console.error("An error occurred while getting all users:", error);
    return null;
  }
};

export const getStatCategories = async (token) => {
  try {
    const res = await axios.get(
      "https://apiku.desawisatapunjulharjo.com/api/countsCategories",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.data) {
      // console.log('BukuLinks found:', res.data.data);
      return res.data.data; // return the user data
    } else {
      // console.log('No bukulinks found');
      return null;
    }
  } catch (error) {
    console.error("An error occurred while getting all users:", error);
    return null;
  }
};

export const getStatNews = async (token) => {
  try {
    const res = await axios.get(
      "https://apiku.desawisatapunjulharjo.com/api/countNews",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.data) {
      // console.log('BukuLinks found:', res.data.data);
      return res.data.data; // return the user data
    } else {
      // console.log('No bukulinks found');
      return null;
    }
  } catch (error) {
    console.error("An error occurred while getting all users:", error);
    return null;
  }
};

export const getStatVideo = async (token) => {
  try {
    const res = await axios.get(
      "https://apiku.desawisatapunjulharjo.com/api/countVideos",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.data) {
      // console.log('User data found:', res.data.data);
      return res.data.data; // return the User data
    } else {
      // console.log('No User data found');
      return null;
    }
  } catch (error) {
    console.error("An error occurred while getting User data:", error);
    return null;
  }
};

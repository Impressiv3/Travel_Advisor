import axios from "axios";
const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (southWest, northEast) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: southWest.lat,
        tr_latitude: northEast.lat,
        bl_longitude: southWest.lng,
        tr_longitude: northEast.lng,
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

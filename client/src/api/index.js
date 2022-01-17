import axios from "axios";
const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: "11.847676",
        tr_latitude: "12.838442",
        bl_longitude: "109.095887",
        tr_longitude: "109.149359",
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": "2b591d2a3fmsh303c80a9aea33e2p150e2fjsn471166f2fb61",
      },
    });
    return data;
  } catch (error) {}
};

/* export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        "x-rapidapi-key": "2b591d2a3fmsh303c80a9aea33e2p150e2fjsn471166f2fb61",
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
}; */

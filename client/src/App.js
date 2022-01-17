import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesData } from "./api";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({ southWest: {}, northEast: {} });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  /*   useEffect(() => {
    console.log("bounds:", bounds);

    getPlacesData().then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, [coordinates, bounds]);
 */

  useEffect(() => {
    if (bounds) {
      setIsLoading(true);
      getPlacesData(bounds.southWest, bounds.northEast)
        .then((data) => {
          console.log(data);
          setPlaces(data);
        })
        .catch((error) => console.log(error))
        .finally(setIsLoading(false));
    }
  }, [bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <Map coordinates={coordinates} setCoordinates={setCoordinates} setBounds={setBounds} />
        </Grid>
      </Grid>
    </>
  );
};

export default App;

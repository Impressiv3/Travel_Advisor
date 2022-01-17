import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesData } from "./api";

const App = () => {

  const INITIAL_PLACES_STATE = [];
  const INITIAL_COORDINATES_STATE = {};
  const INITIAL_BOUNDS_STATE = { southWest: {}, northEast: {} };

  const [isLoading, setIsLoading] = useState(false);
  const [places, setPlaces] = useState(INITIAL_PLACES_STATE);
  const [coordinates, setCoordinates] = useState(INITIAL_COORDINATES_STATE);
  const [bounds, setBounds] = useState(INITIAL_BOUNDS_STATE);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

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
          <List places={places} />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <Map coordinates={coordinates} 
          setCoordinates={setCoordinates} 
          setBounds={setBounds}
          places={places}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;

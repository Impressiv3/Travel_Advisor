import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';


const Map = ({coordinates, setCoordinates, setBounds, places}) => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
             bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
             defaultCenter={coordinates}
             center={coordinates}
             defaultZoom={14}
             margin={[50, 50, 50, 50]}
             options={{ disableDefaultUI: true, zoomControl: true }}
             onChange={(event) => {
              setCoordinates({ lat: event.center.lat, lng: event.center.lng });
              setBounds({ southWest: event.marginBounds.sw, northEast: event.marginBounds.ne});
             }}
            >
            </GoogleMapReact>
        </div>   
    )
}

export default Map;
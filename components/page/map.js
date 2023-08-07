import React, { useState, useEffect } from "react";
import Geocode from "react-geocode";
import { GoogleMap, LoadScript, Marker,InfoWindow } from '@react-google-maps/api';

function Map() {

  const markers = [];
  const [activeMarker, setActiveMarker] = useState(null);
  const [status, setStatus] = useState(false);
  const [employees, setEmployees] = useState(markers);
  const containerStyle = {
    width: '100%',
    height: '700px'
  };

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  Geocode.setApiKey("AIzaSyC5vJg6Zs-nho_xeQgpVJXJsm8rWN1wovU");

  // set response language. Defaults to english.
  Geocode.setLanguage("en");

  Geocode.setLocationType("ROOFTOP");


  Geocode.enableDebug();

    let markerss =[];
    useEffect(() => {
    
      var initialMarkers = ["noida sector 2", "noida sector 15", "ambedker park lucknow", "new ashok nagar"];
      initialMarkers.map((place, indx) => (
        Geocode.fromAddress(place).then(
          (response) => {
            const { lat, lng } = response.results[0].geometry.location;
            const markData = {
              id: indx+1,
              name: response.results[0].formatted_address,
              position: { lat: lat, lng: lng }
            }
            markerss.push(markData);
            setEmployees([...employees, ...markerss]);
          },
          (error) => {
            console.error(error);
          }
        )
      ))

      setTimeout(() => {
        setStatus(true)
      }, 1000);
    }, [])
    const handleOnLoad = (map) => {
      const bounds = new google.maps.LatLngBounds();
      employees.forEach(({ position }) => bounds.extend(position));
      map.fitBounds(bounds);
  
    };

  if (status) {

    return (
      <LoadScript
        googleMapsApiKey="AIzaSyC5vJg6Zs-nho_xeQgpVJXJsm8rWN1wovU"
      >
        <GoogleMap
          onLoad={handleOnLoad}
          onClick={() => setActiveMarker(null)}
          mapContainerStyle={containerStyle}
        >
          {
            employees.map(({ id, name, position }) => (
              <Marker
                key={id}
                position={position}
                onClick={() => handleActiveMarker(id)}
              >
                {activeMarker === id ? (
                  <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                    <div>{name}</div>
                  </InfoWindow>
                ) : null}
              </Marker>
            ))}
        </GoogleMap>
      </LoadScript>
    );
  } else {
    return (
      <span>Loading.....</span>
    )
  }


}

export default Map;

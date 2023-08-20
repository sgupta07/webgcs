import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const PrettyText = styled.p`
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid darkred;
  border-radius: 3px;
`;

const GPS_REST_ENDPOINT = "http://localhost:8001/gps"; // Fixed typo "loclhost" to "localhost"
const DEFAULT_POSITION_STATE = {
  "latitude_deg": 0,
  "longitude_deg": 0,
  "absolute_altitude_m": 0,
  "relative_altitude_m": 0
};

function GPSCords() {
  const [gpsPos, setGpsPos] = useState(DEFAULT_POSITION_STATE);

  useEffect(() => {
    const timer = setInterval(async () => {
      const res = await fetch(GPS_REST_ENDPOINT);
      const newGpsPosition = await res.json(); // Added parentheses after json
      setGpsPos(newGpsPosition);
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <PrettyText>
        latitude_deg: {gpsPos.latitude_deg}, longitude_deg: {gpsPos.longitude_deg},
        absolute_altitude_m: {gpsPos.absolute_altitude_m}, relative_altitude_m: {gpsPos.relative_altitude_m}
      </PrettyText>
    </div>
  );
}

export default GPSCords;

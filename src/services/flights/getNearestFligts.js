import { getDistance } from "geolib";

const getNearestFlights = async (
  { latitude, longitude },
  allFlights,
  distance = 1
) => {
  let nearestFlights = await allFlights.filter(flight => {
    if (
      flight[5] - distance < longitude &&
      flight[5] + distance > longitude &&
      flight[6] - distance < latitude &&
      flight[6] + distance > latitude
    ) {
      return flight;
    }
  });
  let finalFlights;
  if (nearestFlights !== []) {
    finalFlights = await nearestFlights.map(async flight => {
      const distance = await getDistance(
        { latitude, longitude },
        { latitude: flight[6], longitude: flight[5] }
      );
      return {
        icao24: flight[0],
        callsign: flight[1],
        origin_country: flight[2],
        distance: distance,
        latitude: flight[6],
        longitude: flight[5]
      };
    });
  }
  return await Promise.all(finalFlights).then(response => {
    return response;
  });
};

export default getNearestFlights;

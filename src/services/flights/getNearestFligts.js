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
    const filteredFlights = await nearestFlights.filter(
      flight => flight[5] || flight[6] !== null
    );
    finalFlights = await filteredFlights.map(async flight => {
      const distance = getDistance(
        { latitude, longitude },
        { latitude: flight[6], longitude: flight[5] }
      );
      const distanceKM = Math.floor(distance / 1000);
      return {
        icao24: flight[0],
        callsign: flight[1],
        origin_country: flight[2],
        distance: distanceKM,
        latitude: flight[6],
        longitude: flight[5]
      };
    });
  }

  return await Promise.all(finalFlights).then(response => {
    return response.sort((a, b) => (a.distance > b.distance ? 1 : -1));
  });
};

export default getNearestFlights;

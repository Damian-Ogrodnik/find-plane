import axios from "axios";

const getFlights = async () => {
  try {
    const flights = await axios.get(
      "https://opensky-network.org/api/states/all"
    );
    return flights.data.states;
  } catch (err) {
    return err;
  }
};

export default getFlights;

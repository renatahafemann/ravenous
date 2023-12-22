import { yelpApiKey } from "./YelpApiKey";

export const fetchYelpData = async (location, term, sortBy) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${yelpApiKey}`
        }
      };
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${location}&term=${term}&sort_by=${sortBy}&limit=20`, options);
    const data = await response.json();
    return data;
  };

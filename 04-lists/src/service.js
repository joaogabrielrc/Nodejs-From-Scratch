const axios = require('axios');
const API_URL = `https://swapi.dev/api/people`;

async function getPeople(name) {
  const endpoint = `${API_URL}/?search=${name}&format=json`;
  const { data: people } = await axios.get(endpoint);
  return people;
}

module.exports = {
  getPeople
};

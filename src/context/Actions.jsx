import axios from 'axios';

const ffxiv = axios.create({
  baseURL: 'https://xivapi.com',
});

export const searchCharacters = async (text) => {
  const response = await ffxiv.get(`/character/search?name=${text}`);
  return response.data.Results;
};

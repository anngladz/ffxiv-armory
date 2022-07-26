import axios from 'axios';

const ffxiv = axios.create({
  baseURL: 'https://xivapi.com',
});

export const searchCharacters = async (text, server) => {
  const response = await ffxiv.get(
    `/character/search?name=${text}&server=${server}`
  );
  return response.data.Results;
};

export const getCharacter = async (id) => {
  const response = await ffxiv.get(`/character/${id}`);
  return response.data.Character;
};

export const getServers = async () => {
  const response = await ffxiv.get(`/servers/dc`);
  return response.data;
};

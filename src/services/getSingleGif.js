import { apiKey, apiUrl } from './settings';

const fromApiResponseGifs = (apiResponse) => {
  const { data } = apiResponse;
  const { title, id, images } = data;
  const { url } = images.downsized_medium;
  return { title, id, url };
};

export const getSingleGif = async ({ id = 1 } = {}) => {
  const url = `${apiUrl}/gifs/${id}?api_key=${apiKey}`;
  return fetch(url).then((res) => res.json()).then(fromApiResponseGifs);
};

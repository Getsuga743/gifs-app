import { apiKey, apiUrl } from './settings';

const fromApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse.data;
  if (Array.isArray(data)) {
    const gifs = apiResponse.data.map((img) => {
      const { title, id } = img;
      const { url: urlImg } = img.images.downsized_medium;
      return { title, id, url: urlImg };
    });
    return gifs;
  }
  return [];
};

export const getGifs = async ({
  keyword = 'morty', limit = 24, page = 0, rating,
} = {}) => {
  const url = `${apiUrl}/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=${(limit * page)}&rating=${rating}&lang=en`;
  return fetch(url).then((res) => res.json()).then(fromApiResponseToGifs);
};

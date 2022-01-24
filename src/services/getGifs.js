import { apiKey } from './settings';

export const getGifs = async ({ keyword = 'morty', limit = 24, page = 0 } = {}) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=${(limit * page)}&rating=g&lang=en`;
  return fetch(url).then((res) => res.json()).then((response) => {
    const { data = [] } = response.data;
    if (Array.isArray(data)) {
      const gifs = response.data.map((img) => {
        const { title, id } = img;
        const { url: urlImg } = img.images.preview_gif;
        return { title, id, url: urlImg };
      });
      return gifs;
    }
  });
};

export const getGifById = async ({ id = 1 } = {}) => {
  const url = `https://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}`;
  return fetch(url).then((res) => res.json());
};

export const getGifs = async ({ keyword = 'morty' } = {}, limit = 25) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_API_KEY}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`;
  return fetch(url).then((res) => res.json()).then((response) => {
    const { data = [] } = response.data;
    if (Array.isArray(data)) {
      const gifs = response.data.map((img) => {
        const { title, id } = img;
        const { url } = img.images.preview_gif;
        return { title, id, url };
      });
      return gifs;
    }
  });
};

export const getGifById = async ({ id = 1 } = {}) => {
  const url = `https://api.giphy.com/v1/gifs/${id}?api_key=${import.meta.env.VITE_API_KEY}`;
  return fetch(url).then((res) => res.json()).then((response) => {
  });
};

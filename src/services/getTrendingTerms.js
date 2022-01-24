const fromApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse;
  return data;
};

export default async function getTrendingTerms() {
  const apiUrl = `https://api.giphy.com/v1/trending/searches?api_key=${import.meta.env.VITE_API_KEY}`;
  const res = await fetch(apiUrl);
  const data = await res.json();
  return fromApiResponseToGifs(data);
}

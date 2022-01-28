import { apiKey, apiUrl } from './settings';

const fromApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse;
  return data;
};

export default async function getTrendingTerms() {
  const url = `${apiUrl}/trending/searches?api_key=${apiKey}`;
  const res = await fetch(url);
  const data = await res.json();
  return fromApiResponseToGifs(data);
}

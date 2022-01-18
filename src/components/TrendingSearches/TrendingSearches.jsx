import React, { useState, useEffect } from 'react';
import getTrendingTerms from '../../services/getTrendingTerms';
import Category from '../Category/Category';

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    getTrendingTerms({ signal: controller.signal }).then((data) => setTrends(data));

    return () => controller.abort();
  });
  return <Category name="Tendecies" options={trends} />;
}

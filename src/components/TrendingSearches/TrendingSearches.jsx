import React, { useState, useEffect } from 'react';
import getTrendingTerms from '../../services/getTrendingTerms';
import Category from '../Category/Category';

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    getTrendingTerms().then((data) => setTrends(data));
  }, []);
  return <Category name="Tendecies" options={trends} />;
}

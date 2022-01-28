import React from 'react';
import { Redirect } from 'wouter';
import { Helmet } from 'react-helmet';
import Spinner from '../../components/Spinner';
import useSingleGif from '../../hooks/useSingleGif';
import { LayoutContainer } from '../../layout/LayoutContainer';
import { DetailGifContainer } from './styles';

function Detail({ params }) {
  const { gif, error, loading } = useSingleGif({ id: params.id });
  if (loading) {
    return (
      <>
        <Helmet>
          <title>Loading...</title>
        </Helmet>
        <Spinner />
      </>

    );
  }
  if (error) return (<Redirect to="/404" />);
  if (!gif) return null;
  return (
    <>
      <Helmet>
        <title>
          {gif.title}
          | Giffy
        </title>
      </Helmet>
      <LayoutContainer>
        <h1>{gif.title}</h1>
        <DetailGifContainer>
          <img src={gif.url} alt={gif.title} />
        </DetailGifContainer>
      </LayoutContainer>
    </>

  );
}

export default Detail;

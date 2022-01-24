import React from 'react';
import { Link } from 'wouter';
import { GifWrapper } from './styles';

function Gif({ url, title, id }) {
  return (
    <Link href={`/gif/${id}`}>
      <GifWrapper>
        <div>
          <img loading="lazy" alt={title} src={url} />
        </div>
        <h3>{title}</h3>
      </GifWrapper>
    </Link>
  );
}
export default React.memo(Gif);

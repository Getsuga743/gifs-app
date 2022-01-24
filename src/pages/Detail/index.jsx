import React from 'react';

function Detail({ params }) {
  const { id } = params;

  const gifsContext = useContext(GifsContext);
  return (
    <div>
      {id}
    </div>
  );
}

export default Detail;

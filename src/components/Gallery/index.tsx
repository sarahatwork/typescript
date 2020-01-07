import React from 'react';
import { useQuery, gql } from '@apollo/client';

const IMAGE_QUERY = gql`
  {
    characters {
      results {
        image
      }
    }
  }
`;

function Gallery() {
  const { loading, error, data } = useQuery(IMAGE_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.characters.results.map(({ image }: any) => (
    <img alt="" key={image} src={image} />
  ));
}

export default Gallery;

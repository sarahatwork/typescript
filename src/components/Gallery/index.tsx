import React from 'react';
import { useQuery, gql } from '@apollo/client';

const IMAGE_QUERY = gql`
  {
    artworks {
      image {
        image_url
      }
    }
  }
`;

function Gallery() {
  const { loading, error, data } = useQuery(IMAGE_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.artworks.map(({ image: { image_url } }: any) => (
    <img alt="" key={image_url} src={image_url.replace(':version', 'large')} />
  ));
}

export default Gallery;

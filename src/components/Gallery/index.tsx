import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

const IMAGE_QUERY = gql`
  query Characters($name: String!) {
    characters(filter: { name: $name }) {
      results {
        image
      }
    }
  }
`;

function GallerySearch({ name, setName }: any) {
  const { loading, error, data } = useQuery(IMAGE_QUERY, {
    variables: { name }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.characters.results.map(({ image }: any) => (
    <img alt="" key={image} src={image} />
  ));
}

function Gallery() {
  const [name, setName] = useState('Rick');

  return (
    <>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        style={{ display: 'block' }}
      />
      <GallerySearch name={name} setName={setName} />
    </>
  );
}

export default Gallery;

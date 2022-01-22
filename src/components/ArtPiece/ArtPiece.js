import { useState, useCallback, useEffect } from 'react';

const ArtPiece = () => {
  const [art,setArt] = useState({});

  const fetchArtPiece = useCallback(async () => {
    const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/436121');
    const data = await response.json();
    console.log(data)

    const artPiece = {
      title: data.title,
      artist: data.artistDisplayName,
      image: data.primaryImage
    }

    setArt(artPiece);
  }, []);

  useEffect(() => {
    fetchArtPiece();
  }, [fetchArtPiece])
  
  return (
    <section>
      <h1>{art.title}</h1>
      <h2>{art.artist}</h2>
      <img src={art.image} alt={`${art.title} by ${art.artist}`} />
    </section>
  )
}

export default ArtPiece;
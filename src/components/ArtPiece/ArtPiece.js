import { useState, useCallback, useEffect } from 'react';
import Image from '../Image/Image';
import Description from '../Description/Description';
import classes from './ArtPiece.module.css';

const ArtPiece = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchArtPiece = useCallback(async () => {
    try {
      const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/436121');
      if (!response.ok) {
        console.log(response)
        throw new Error(`Error: ${response.status} ${response.statusText}`)
      }
      const data = await response.json();

      setTitle(data.title);
      setArtist(data.artistDisplayName);
      setImage(data.primaryImage);
    } catch (error) {
      console.log(error.message);
      setError(true);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchArtPiece();
  }, [fetchArtPiece])
  
  return (
    <>
      {isLoading && <p className={classes.loading}>Loading...</p>}
      {error && !isLoading && <p className={classes.error}>An error has occurred. Please try again later.</p>}
      {!error && !isLoading &&
        <section className={classes.container}>
          <Image title={title} artist={artist} image={image} />
          <Description title={title} artist={artist} />
        </section>
      }
    </>
  )
}

export default ArtPiece;
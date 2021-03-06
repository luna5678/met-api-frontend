import { useState, useCallback, useEffect } from 'react';
import Image from '../Image/Image';
import Description from '../Description/Description';
import Loader from '../UI/Loader';
import classes from './ArtPiece.module.css';

const ArtPiece = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [image, setImage] = useState('');
  const [fullLink, setFullLink] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchArtPiece = useCallback(async () => {
    try {
      const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/436121');
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`)
      }
      const data = await response.json();

      setTitle(data.title);
      setArtist(data.artistDisplayName);
      setImage(data.primaryImage);
      setFullLink(data.objectURL);
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
    <section className={classes.container}>
      {isLoading && <Loader />}
      {error && !isLoading && <p className={classes.error}>Oops! An error has occurred. Please try again later.</p>}
      {!error && !isLoading &&
        <>
          <Image title={title} artist={artist} image={image} link={fullLink}  />
          <Description title={title} artist={artist} />
        </>
      }
    </section>
  )
}

export default ArtPiece;
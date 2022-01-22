import { useState, useCallback, useEffect } from 'react';
import Image from '../Image/Image';
import Description from '../Description/Description';
import classes from './ArtPiece.module.css';

const ArtPiece = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [image, setImage] = useState('')

  const fetchArtPiece = useCallback(async () => {
    const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/436121');
    const data = await response.json();
    console.log(data)

    setTitle(data.title);
    setArtist(data.artistDisplayName);
    setImage(data.primaryImage);
  }, []);

  useEffect(() => {
    fetchArtPiece();
  }, [fetchArtPiece])
  
  return (
    <section className={classes.container}>
      <Description title={title} artist={artist} />
      <Image title={title} artist={artist} image={image} />
    </section>
  )
}

export default ArtPiece;
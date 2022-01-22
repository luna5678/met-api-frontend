import classes from './Image.module.css'

const Image = (props) => {
  return (
    <img src={props.image} alt={`${props.title} by ${props.artist}`} />
  )
}

export default Image;
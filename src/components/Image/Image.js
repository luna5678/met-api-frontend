import classes from './Image.module.css'

const Image = (props) => {
  return (
    <a href={props.link} target='_blank' rel='noreferrer'>
      <img src={props.image} alt={`${props.title} by ${props.artist}`} />
    </a>
  )
}

export default Image;
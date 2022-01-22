import classes from './Description.module.css';

const Description = (props) => {
  return (
    <div className={classes['description-background']}>
      <div className={classes.description}>
        <h1>{props.artist}</h1>
        <h2>{props.title}</h2>
      </div>
    </div>
  )
}

export default Description;
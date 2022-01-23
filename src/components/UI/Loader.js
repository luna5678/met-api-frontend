import classes from './Loader.module.css';

const Loader = () => {
  return (
    <div className={classes.container}>
      <p>Loading...</p>
      <img src='loading-svgrepo-com.svg' alt='loading icon' className={classes.loader} />
    </div>
  )
}

export default Loader;
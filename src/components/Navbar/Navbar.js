import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <a href='https://www.metmuseum.org/' target='_blank' rel="noreferrer">
        <img src='the-met-logo.png' alt='The MET logo' className={classes.logo} />
      </a>
    </nav>
  )
}

export default Navbar;
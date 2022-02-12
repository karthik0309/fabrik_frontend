import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const [sideNavClass, setSideNavClass] = useState([classes.nav__middle]);
  
  const handleSideNavClick = () => {
    if (!showSideNav) {
      setSideNavClass([classes.nav__middle, classes.show]);
    } else {
      setSideNavClass([classes.nav__middle]);
    }
    setShowSideNav(!showSideNav);
  };
  
  return (
    <div className={classes.nav__container}>
        <h1 className={classes.nav__title}>
            Grofers
        </h1>

        <div className={sideNavClass.join(" ")}>
            <ul className={classes.nav__list} onClick={handleSideNavClick}> 
              <Link to="/" className={classes.nav__item}>
                Home
              </Link>
              <Link to="/upload" className={classes.nav__item}>
                  Upload
              </Link>
              <Link to="/reviews" className={classes.nav__item}>
                Reviews
              </Link>
            </ul>
        </div>

        <div className={classes.nav__end}>
          <p className={classes.login}>
            Login
          </p>
          <button className={classes.signup}>
            Signup
          </button>
        </div>
        
        <div className={classes.hamburger} onClick={handleSideNavClick}>
            <div className={classes.h1}></div>
            <div className={classes.h1}></div>
        <div className={classes.h1}></div>

      </div>
    </div>
  )
}

export default Navbar
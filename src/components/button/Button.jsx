import React from 'react'
import classes from './Button.module.css'

const Button = ({value,handleClick}) => {
  return (
    <button className={classes.button} onClick={handleClick}>
        {value}
    </button>
  )
}

export default Button
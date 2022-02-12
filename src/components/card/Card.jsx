import React from 'react'
import classes from './Card.module.css'

const Card = ({image}) => {
  return (
    <div className={classes.card__container}>
        <img src={image} alt="" />
    </div>
  )
}

export default Card
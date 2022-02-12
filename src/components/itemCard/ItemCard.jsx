import React from 'react'
import { Link } from 'react-router-dom'
import { Cloudinary } from '../../backend'
import ImageViewer from '../threeDViewer/ImageViewer'
import classes from './ItemCard.module.css'

const ItemCard = ({imgDetails}) => {
  return (
    <div className={classes.item__card}>
        <div className={classes.item__image}>
            <ImageViewer 
            img={Cloudinary+imgDetails.imageURL}
            fov={5}
            color={true}/>
        </div>
        <div className={classes.item__info}>
            <div className={classes.price}>
              {imgDetails.price}$
            </div>
            <h2 className={classes.item__name}>
              {imgDetails.name}
            </h2>
        </div>
        <Link to={`/model/${imgDetails._id}`} className={classes.item__button}>
            view
        </Link>
    </div>
  )
}

export default ItemCard
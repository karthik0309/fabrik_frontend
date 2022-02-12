import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { API,Cloudinary } from '../../backend';
import ImageViewer from '../../components/threeDViewer/ImageViewer';
import classes from './Model.module.css'

const Model = () => {
  const currLocation = useLocation();
  const [item,setItem]=useState({})

  const getModelById=async(postId)=>{
    try{
      const res = await fetch(`${API}/get/${postId}`)
      res.json().then(item=>{
        setItem(item)
    })
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    const postId = currLocation.pathname.split("/")[2];
    getModelById(postId)
  },[])

  console.log(item)
  return (
    <div className={classes.model__container}>
      <div className={classes.model__preview}>
        <ImageViewer img={Cloudinary+item.imageURL} fov={5}/>
      </div>
      <div className={classes.model__info}>
        <h1 className={classes.model__name}>
          {item.name}
        </h1>
        <p className={classes.model__price}>
          {item.price}$
        </p>
        <p className={classes.model__price}>
          Lorem ipsum dolor sit amet consectetur <br/>
          adipisicing elit.Tempore, quisquam vitae,<br/> 
          dolor debitis nobis, numquam ratione<br/> 
          dignissimos excepturi autem unde nam!<br/> 
          Veniam, facilis rem laudantium<br/> 
          illo nobis ipsum vel placeat?<br/>
        </p>
      </div>
    </div>
  )
}

export default Model
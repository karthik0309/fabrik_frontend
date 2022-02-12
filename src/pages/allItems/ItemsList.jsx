import React,{useState,useEffect} from 'react'
import ItemCard from '../../components/itemCard/ItemCard'
import {API} from '../../backend'
import classes from './ItemsList.module.css'

const ItemsList = () => {
  const[items,setItems]=useState([])

  const getItems=async()=>{
      try{
        const res = await fetch(`${API}/get`)
        res.json().then(item=>{
            setItems(item)
        })
      }catch(err){
        console.log(err)
      }
  }

  useEffect(()=>{
    getItems()
  },[])

  return (
    <div className={classes.all__items}>
        {items.length>0 &&
        items.map((item)=>(
            <ItemCard imgDetails={item} key={item.imageURL}/>
        ))}
    </div>
  )
}

export default ItemsList
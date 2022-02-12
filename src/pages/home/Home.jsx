import React from 'react'
import Card from '../../components/card/Card'
import Landing from  '../../assets/landing.png'
import Burger from  '../../assets/burger.png'
import Pizza from  '../../assets/pizza.png'
import classes from './Home.module.css'
import ItemsList from '../allItems/ItemsList'

const Home = () => {
  return (
    <div className={classes.main__container}>
      <div className={classes.home__container}>
        <div className={classes.left}>
          <span className={classes.span}>
            Quick
          </span>
          <h1>delivery at</h1>
          <h1>your doorstep</h1>
          <p className={classes.tagling}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/>
            Lorem ipsum dolor, sit amet consectetur
          </p>
          <div className={classes.top}>
            <Card image={Pizza}/>
          </div>
          <div className={classes.abs}>
            <Card image={Burger}/>
          </div>
          <div className={classes.bottom}>
            <Card image={Pizza}/>
          </div>
        </div>
        <div className={classes.right}>
          <img src={Landing} alt="landing_image" />
        </div>
      </div>
      <br/>
      <h1 className={classes.items__title}>
        Items
      </h1>
      <div className={classes.items}>
        <ItemsList/>
      </div>
    </div>
  )
}

export default Home
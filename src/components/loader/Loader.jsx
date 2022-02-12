import React from "react";
import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={classes.spinner__container}>
      <div className={classes.spinner}></div>
    </div>
  );
};

export default Loader;
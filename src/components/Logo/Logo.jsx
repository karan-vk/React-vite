import React from "react";
import BurgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div className={classes.Logo} style={{ height: props.height }}>
      <img src={BurgerLogo} alt="" />
      <div></div>
    </div>
  );
};

export default Logo;

import React from "react";
import { NavLink } from "react-router-dom";
import diologsClasses from "./DiologsItem.module.css";

const DiologsItem = (props) => {
  const path = `/diologs/${props.id}`;
  return (
    <div className={diologsClasses.item}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DiologsItem;

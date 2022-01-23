import React from "react";
import "./menu-item.component.style.scss";
import {withRouter} from 'react-router-dom';

const Menulist = (props) => {
  return (
    <div className={`${props.size} menu-item`} onClick = {() => props.history.push(`${props.match.url}${props.linkUrl}`)}>
      <div className="backgroundImage" 
      style = {{backgroundImage : `url(${props.imageUrl})`}} 
    />
        <div className="content">
          <h1 className="title">{props.item}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
  );
};

export default withRouter(Menulist);

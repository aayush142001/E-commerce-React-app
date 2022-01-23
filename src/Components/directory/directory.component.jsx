import React from "react";

import Menulist from '../../Components/menu-item/menu-item.component';

import {connect} from 'react-redux';

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import { createStructuredSelector } from "reselect"; 

import "./directory.component.style.scss";

const Directory = ({sections}) =>{
 
    return (
      <div className = "directory-menu">
       {
         sections.map( ({id, ...sectionProps }) => <Menulist key = {id} {...sectionProps}/>)
       }
      </div>
    );  
  }


const mapStateToProps = createStructuredSelector({
  sections : selectDirectorySections,
}
)

export default connect(mapStateToProps)(Directory);
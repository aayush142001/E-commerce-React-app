import React from 'react';

import CustomButon from '../custom-button/custom-buttom.component';

import { addItem } from '../../redux/cart/cart.action';

import { connect } from 'react-redux'; 

import '../collection-item/collection-item.component.style.scss';

const CollectionItem = ({item, addItem}) => {
    
    const {imageUrl, name, price} = item;

    return (
    <div className="collection-item">
        <div className="image" style={{backgroundImage : `url(${imageUrl})`}} />
        <div className="collection-footer">
            <span className="name"> {name} </span>
            <span className="price"> {`$${price}`} </span>
        </div>
        <CustomButon onClick = {() => addItem(item)} inverted>  Add to cart </CustomButon>
    </div>
)}

const mapDispatchToProps = (dispatch) => ({
    addItem : (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
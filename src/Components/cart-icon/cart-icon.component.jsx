import React from 'react';

import { ReactComponent as ShoppingIcon} from '../../assets/11.2 shopping-bag.svg';

import { ToggleCartHidden } from '../../redux/cart/cart.action';

import { selectCartItemsCount } from '../../redux/cart/cart.selector';

import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';

import './cart-icon.style.scss';

const CartIcon = ({ToggleCartHidden, itemsCount}) =>(
    <div className="cart-icon" onClick={ToggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemsCount}</span>
    </div>
)

const mapStateToProps = createStructuredSelector({
   itemsCount : selectCartItemsCount,
})

const mapDispatchToProps = (dispatch) => ({
    ToggleCartHidden : () => dispatch(ToggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
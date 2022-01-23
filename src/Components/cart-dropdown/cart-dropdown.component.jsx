import React from "react";

import CartItem from "../cart-item/cart-item.component";

import CustomButton from "../custom-button/custom-buttom.component";

import { connect } from "react-redux";

import { selectCartItems } from "../../redux/cart/cart.selector";

import { ToggleCartHidden } from "./../../redux/cart/cart.action";

import { createStructuredSelector } from "reselect";

import { withRouter } from "react-router-dom";

import "./cart-dropdown.style.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} {...cartItem} />
        ))
      ) : (
        <span className="empty-message">Your Cart is Empty.</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(ToggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
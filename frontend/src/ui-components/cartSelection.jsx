import React from 'react';
import CartSelectionItem from "./cartSelectionItem";
import CartSelectionDefaultItem from "./cartSelectionDefaultItem";

export default class CartSelection extends React.Component {

    render() {
        const {changeHandler, newCartHandler} = this.props;

        let cartItem;
        let defaultCartItem;

        defaultCartItem = <CartSelectionDefaultItem newCartHandler={newCartHandler}/>

        if (this.props.carts) {
            cartItem = this.props.carts.map((cart) => {
                return (<span key={cart.uuid}>
            <CartSelectionItem value={cart} cart={cart}
                               changeHandler={changeHandler}/>
                </span>);
            });
        }

        return (<div>
            {cartItem}
            {defaultCartItem}
        </div>);
    }
}

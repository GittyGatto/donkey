import React from 'react';
import CartSelectionItem from "./cartSelectionItem";
import AddCartSelectionItem from "./addCartSelectionItem";
import uuid from 'uuid';

export default class CartSelection extends React.Component {

    render() {
        const {changeHandler, newCartHandler} = this.props;

        let cartItem;
        const defaultActions = (<span key={uuid.v4()}>
            <AddCartSelectionItem newCartHandler={newCartHandler}/>
                </span>
        );

        if (this.props.carts) {
            cartItem = this.props.carts.map((cart) => {
                return (<span key={cart.uuid}>
            <CartSelectionItem value={cart} cart={cart}
                               changeHandler={changeHandler}/>
                </span>
                );
            });
            cartItem.push(defaultActions);
        }

        return (<div className="panelButtons">
            {cartItem}
        </div>);
    }
}

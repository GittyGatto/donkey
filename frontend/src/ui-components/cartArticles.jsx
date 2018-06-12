import React from 'react';
import CartItem from "./cartItem";
import uuid from 'uuid';
import CartHeaderItem from "./cartHeaderItem";

export default class CartArticles extends React.Component {

    render() {
        const {addHandler, removeOneHandler, removeArticleHandler, saveHandler, doneHandler, purchase, editCartHandler, renderDoneBox, editToggle, renderButtonPhalanx} = this.props;

        const cartHeaderItem = <CartHeaderItem purchase={purchase}
                                               saveHandler={saveHandler}
                                               editCartHandler={editCartHandler}
                                               editToggle={editToggle}/>;
        let cartItem;

        if (this.props.purchase) {
            cartItem = this.props.purchase.cartArticles.map((article) => {
                return (<span key={uuid.v4()}>
                    <CartItem article={article}
                              addHandler={addHandler}
                              removeOneHandler={removeOneHandler}
                              removeArticleHandler={removeArticleHandler}
                              doneHandler={doneHandler}
                              renderDoneBox={renderDoneBox}
                              renderButtonPhalanx={renderButtonPhalanx}/>
                </span>);
            });

        }

        return (
            <div>
                {cartHeaderItem}
                {cartItem}
            </div>
        );
    }
}

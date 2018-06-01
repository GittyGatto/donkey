import React from 'react';
import CartItem from "./cartItem";
import uuid from 'uuid';
import CartHeaderItem from "./cartHeaderItem";

export default class CartArticles extends React.Component {

    render() {
        const {addHandler, removeOneHandler, removeArticleHandler, saveHandler, saveEnabled, doneHandler, purchase} = this.props;

        let headerItem;
        let cartItem;
        if (this.props.purchase) {
            cartItem = this.props.purchase.cartArticles.map((article) => {
                return (<span key={uuid.v4()}>
                    <CartItem
                        article={article}
                        addHandler={addHandler}
                        removeOneHandler={removeOneHandler}
                        removeArticleHandler={removeArticleHandler}
                        doneHandler={doneHandler}/>
                </span>);
            });

            headerItem = (<span key={uuid.v4()}>
                    <CartHeaderItem
                        purchase={purchase}
                        saveHandler={saveHandler}/>
                </span>);
        }

        return (
            <div className="list-group">
                {headerItem}
                {cartItem}
            </div>
        );
    }
}

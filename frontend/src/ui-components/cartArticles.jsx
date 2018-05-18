import React from 'react';
import CartItem from "./cartItem";
import './articleTable.css'
import uuid from 'uuid';
import CartHeaderItem from "./cartHeaderItem";

export default class CartArticles extends React.Component {

    render() {
        const {addHandler, removeOneHandler, removeArticleHandler, saveHandler, saveEnabled} = this.props;

        let headerItem;
        let cartItem;
        if (this.props.purchase) {
            cartItem = this.props.purchase.cartArticles.map((article) => {
                return (<span key={uuid.v4()}>
                    <CartItem
                        article={article}
                        addHandler={addHandler}
                        removeOneHandler={removeOneHandler}
                        removeArticleHandler={removeArticleHandler}/>
                </span>);
            });

            headerItem = (<span key={uuid.v4()}>
                    <CartHeaderItem
                        saveHandler={saveHandler}
                        disabled={saveEnabled}/>
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
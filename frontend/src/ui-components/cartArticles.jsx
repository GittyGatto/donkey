import React from 'react';
import CartItem from "./cartItem";
import CartHeaderItem from "./cartHeaderItem";
import {Table} from "react-bootstrap";

export default class CartArticles extends React.Component {

    render() {
        const {addHandler, removeOneHandler, removeArticleHandler, saveHandler, doneHandler, purchase, editCartHandler, renderDoneBox, editToggle, renderButtonPhalanx, completedArticles} = this.props;

        const cartHeaderItem = <CartHeaderItem purchase={purchase}
                                               saveHandler={saveHandler}
                                               editCartHandler={editCartHandler}
                                               editToggle={editToggle}
                                               completedArticles={completedArticles}
                                               totalArticles={purchase.cartArticles.length}/>;
        let cartItem;

        if (this.props.purchase) {
            cartItem = this.props.purchase.cartArticles.map((article) => {
                return (<CartItem article={article}
                                  addHandler={addHandler}
                                  removeOneHandler={removeOneHandler}
                                  removeArticleHandler={removeArticleHandler}
                                  doneHandler={doneHandler}
                                  renderDoneBox={renderDoneBox}
                                  renderButtonPhalanx={renderButtonPhalanx}/>);
            });

            return (
                <div>
                    {cartHeaderItem}
                    <Table bordered condensed hover className="cartArticles">
                        <thead>
                        <tr>
                            <th>Anzal</th>
                            <th>Artikel</th>
                            <th>Editieren</th>
                        </tr>
                        </thead>
                        {cartItem}
                    </Table>
                </div>
            );
        }
    }
}

import React from 'react';
import CartItem from "./cartItem";
import CartHeaderItem from "./cartHeaderItem";
import {Button, Glyphicon, Table} from "react-bootstrap";

export default class CartArticles extends React.Component {

    render() {
        const {addHandler, removeOneHandler, removeArticleHandler, saveHandler, doneHandler, purchase, editCartHandler, completedArticles, backHandler} = this.props;


        const backButton = <Button className="big_button"
                                   bsStyle="info"
                                   bsSize="lg"
                                   onClick={backHandler}><Glyphicon className="big_icon" glyph="chevron-left"/></Button>

        const editCartArticles = <Button className="big_button"
                                         bsStyle="success"
                                         bsSize="lg"
                                         onClick={editCartHandler}><Glyphicon className="big_icon" glyph="plus"/></Button>

        const cartHeaderItem = <CartHeaderItem purchase={purchase}
                                               saveHandler={saveHandler}
                                               completedArticles={completedArticles}
                                               totalArticles={purchase.cartArticles.length}/>;
        let cartItem;

        if (this.props.purchase) {
            cartItem = this.props.purchase.cartArticles.map((article) => {
                return (<CartItem article={article}
                                  addHandler={addHandler}
                                  removeOneHandler={removeOneHandler}
                                  removeArticleHandler={removeArticleHandler}
                                  doneHandler={doneHandler}/>);
            });

            return (
                <div>
                    {backButton}
                    {cartHeaderItem}
                    <Table hover className="cartArticles">
                        {cartItem}
                    </Table>
                    {editCartArticles}
                </div>
            );
        }
    }
}

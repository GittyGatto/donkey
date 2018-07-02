import React from 'react';
import CartItem from "./cartItem";
import CartHeaderItem from "./cartHeaderItem";
import {Button, Glyphicon, Table} from "react-bootstrap";

export default class CartArticles extends React.Component {

    render() {
        const {addHandler, removeOneHandler, removeArticleHandler, saveHandler, doneHandler, purchase, editCartHandler, completedArticles, backHandler, deleteHandler, onEditClicked} = this.props;


        const backButton = <Button className="big_button"
                                   bsStyle="info"
                                   bsSize="lg"
                                   onClick={backHandler}><Glyphicon className="big_icon" glyph="chevron-left"/></Button>

        const toArticles = <Button className="big_button"
                                   bsStyle="success"
                                   bsSize="lg"
                                   onClick={editCartHandler}><Glyphicon className="big_icon"
                                                                              glyph="plus"/></Button>

        const statusBar = <CartHeaderItem purchase={purchase}
                                               saveHandler={saveHandler}
                                               deleteHandler={deleteHandler}
                                               completedArticles={completedArticles}
                                               totalArticles={purchase.cartArticles.length}/>;
        let cartItem;
        if (purchase) {
            cartItem = purchase.cartArticles.map((article) => {
                return (<CartItem article={article}
                                  addHandler={addHandler}
                                  removeOneHandler={removeOneHandler}
                                  removeArticleHandler={removeArticleHandler}
                                  doneHandler={doneHandler}
                                  onEditClicked={onEditClicked}/>);
            });

            return (
                <div>
                    {backButton}
                    {statusBar}
                    {toArticles}
                    <Table hover className="cartArticles">
                        {cartItem}
                    </Table>
                    {toArticles}
                </div>
            );
        }
    }
}

import React, {Component} from 'react';
import {Badge, Button, ButtonGroup, Glyphicon} from "react-bootstrap";

class CartItem extends Component {
    render() {

        const {removeArticleHandler, doneHandler, onEditClicked, article} = this.props;

        return (<tbody className={"cart_article_" + article.done}
                       onClick={(ev) => doneHandler(ev, article)}>
        <tr>
            <td><Badge className="big_badge">{this.props.article.amount}</Badge></td>
            <td>{this.props.article.articleName}</td>
            <td>
                <ButtonGroup>

                    <Button className="cart_item_button"
                            bsSize="lg"
                            bsStyle="danger"
                            onClick={(ev) => removeArticleHandler(ev, article)}>
                        <Glyphicon className="big_icon"
                                   glyph="remove"/></Button>

                    <Button className="cart_item_button"
                            bsStyle="primary"
                            bsSize="lg"
                            onClick={(ev) => onEditClicked(ev, article)}>
                        <Glyphicon className="big_icon"
                                   glyph="edit"/></Button>

                </ButtonGroup>
            </td>
        </tr>
        </tbody>);
    }
}

export default CartItem;
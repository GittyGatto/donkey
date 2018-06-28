import React, {Component} from 'react';
import {Badge, Button, ButtonGroup, Checkbox, Glyphicon} from "react-bootstrap";

class CartItem extends Component {
    render() {

        const {addHandler, removeOneHandler, removeArticleHandler, doneHandler, article} = this.props;

        return (<tbody>
        <tr>
            <td>
                <Checkbox className="cart_item_checkbox"
                          onChange={(ev) => doneHandler(ev, article)}
                          checked={this.props.article.done}>
                </Checkbox>
            </td>
            <td><Badge>{this.props.article.amount}</Badge></td>
            <td>{this.props.article.articleName}</td>
            <td>
                <ButtonGroup>

                    <Button className="cart_item_button"
                            bsSize="lg"
                            onClick={(ev) => addHandler(ev, article)}>
                        <Glyphicon className="big_icon green"
                                   glyph="plus-sign"/></Button>

                    <Button className="cart_item_button"
                            bsSize="lg"
                            onClick={(ev) => removeOneHandler(ev, article)}>
                        <Glyphicon className="big_icon orange"
                                   glyph="minus-sign"/></Button>

                    <Button className="cart_item_button"
                            bsSize="lg"
                            onClick={(ev) => removeArticleHandler(ev, article)}>
                        <Glyphicon className="big_icon red"
                                   glyph="remove"/></Button>

                </ButtonGroup>
            </td>
        </tr>
        </tbody>);
    }
}

export default CartItem;
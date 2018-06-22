import React, {Component} from 'react';
import {Badge, Button, ButtonGroup, Checkbox, Glyphicon} from "react-bootstrap";

class CartItem extends Component {
    render() {

        const {addHandler, removeOneHandler, removeArticleHandler, doneHandler, article, renderDoneBox, renderButtonPhalanx} = this.props;

        let doneBox = undefined;
        let buttonPhalanx = undefined;

        if (renderDoneBox) {
            doneBox = <td>
                <Checkbox className="cart_item_checkbox"
                          onChange={(ev) => doneHandler(ev, article)}
                          checked={this.props.article.done}>
                </Checkbox>
            </td>
        }

        if (renderButtonPhalanx) {
            buttonPhalanx = <td>
                <ButtonGroup>

                    <Button className="cart_item_button"
                            onClick={(ev) => addHandler(ev, article)}>
                        <Glyphicon glyph="plus"/></Button>

                    <Button className="cart_item_button"
                            onClick={(ev) => removeOneHandler(ev, article)}>
                        <Glyphicon glyph="minus"/></Button>

                    <Button className="cart_item_button"
                            onClick={(ev) => removeArticleHandler(ev, article)}>
                        <Glyphicon glyph="erase"/></Button>

                </ButtonGroup>
            </td>
        }


        return (<tbody>
        <tr>
            <td><Badge>{this.props.article.amount}</Badge></td>
            <td>{this.props.article.articleName}</td>
            {doneBox}
            {buttonPhalanx}
        </tr>
        </tbody>);
    }
}

export default CartItem;
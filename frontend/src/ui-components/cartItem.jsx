import React, {Component} from 'react';
import {Badge, Button, ButtonGroup, Checkbox, Glyphicon, Panel} from "react-bootstrap";

class CartItem extends Component {
    render() {

        const {addHandler, removeOneHandler, removeArticleHandler, doneHandler, article, renderDoneBox} = this.props;

        let doneBox = undefined;

        if (renderDoneBox) {
            doneBox = <Checkbox className="cart_item_checkbox"
                                onChange={(ev) => doneHandler(ev, article)}
                                checked={this.props.article.done}>
            </Checkbox>
        }


        return (<div>
            <Panel className="cart_item"
                   bsStyle="warning">

                <Panel.Heading>

                    <Panel.Title componentClass="h3">

                        <Badge>{this.props.article.amount}</Badge> {this.props.article.articleName}

                        {doneBox}

                        <ButtonGroup className="cart_item_buttonGroup">

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


                    </Panel.Title>

                </Panel.Heading>

            </Panel>

        </div>);
    }
}

export default CartItem;
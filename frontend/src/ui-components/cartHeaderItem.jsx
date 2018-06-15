import React, {Component} from 'react';
import {Button, ButtonGroup, Glyphicon, Panel} from "react-bootstrap";

class CartHeaderItem extends Component {

    render() {
        const {saveHandler, editCartHandler, editToggle, purchase} = this.props;

        return (<div>
            <Panel className="cart_item"
                   bsStyle="info">

                <Panel.Heading>

                    <Panel.Title componentClass="h3">

                        {purchase.name}

                        <ButtonGroup className="cart_item_buttonGroup">

                            <Button className="cart_item_button"
                                    bsStyle="info"
                                    onClick={(ev) => saveHandler(ev)}><Glyphicon glyph="save"/> Save</Button>

                            <Button bsStyle="warning" onClick={(ev) => editCartHandler(ev)}>{editToggle ? 'EDIT' : 'READY'}</Button>

                        </ButtonGroup>

                    </Panel.Title>

                </Panel.Heading>

            </Panel>
        </div>);
    }
}

export default CartHeaderItem;
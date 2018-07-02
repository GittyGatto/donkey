import React, {Component} from 'react';
import {Badge, Button} from "react-bootstrap";

export default class CartSelectionItem extends Component {

    render() {
        const {changeHandler, value, cart} = this.props;

        return (
            <Button className="big_button"
                    bsStyle="info"
                    bsSize="lg"
                    onClick={(ev) => changeHandler(ev, value)}>
                {cart.name} <Badge>{cart.cartArticles.length}</Badge>
            </Button>);
    }
}
import React, {Component} from 'react';
import {Badge, Button} from "react-bootstrap";

export default class CartSelectionItem extends Component {

    render() {
        const {changeHandler, value} = this.props;

        return (
            <Button className="big_button"
                    bsStyle="info"
                    onClick={(ev) => changeHandler(ev, value)}>
                {this.props.cart.name} <Badge>{this.props.cart.cartArticles.length}</Badge>
            </Button>);
    }
}
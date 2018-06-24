import React, {Component} from 'react';
import {Badge, Button, Glyphicon} from "react-bootstrap";

export default class CartSelectionDefaultItem extends Component {

    render() {
        const {newCartHandler} = this.props;

        return (
            <Button className="big_button"
                    bsStyle="warning"
                    bsSize="lg"
                    onClick={newCartHandler}>new donkey <Glyphicon glyph="plus"/>
            </Button>
        );
    }
}
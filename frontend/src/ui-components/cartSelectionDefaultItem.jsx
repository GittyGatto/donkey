import React, {Component} from 'react';
import {Badge, Button, Glyphicon} from "react-bootstrap";

export default class CartSelectionDefaultItem extends Component {

    render() {
        const {newCartHandler} = this.props;

        return (
            <Button className="big_button"
                    bsStyle="warning"
                    onClick={newCartHandler}>new donkey <Glyphicon glyph="plus"/>
            </Button>
        );
    }
}
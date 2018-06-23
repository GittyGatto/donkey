import React, {Component} from 'react';
import {Badge, Button, ButtonGroup, Glyphicon, Panel, ProgressBar} from "react-bootstrap";

class CartHeaderItem extends Component {

    render() {
        const {saveHandler, editCartHandler, editToggle, purchase, completedArticles, totalArticles} = this.props;
        const now = completedArticles/totalArticles*100;

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

                            <Button bsStyle="warning"
                                    onClick={(ev) => editCartHandler(ev)}>{editToggle ? 'EDIT' : 'READY'}</Button>
                        </ButtonGroup>
                    </Panel.Title>
                </Panel.Heading>
                <Panel.Body>Status: <Badge>{completedArticles}</Badge> / <Badge>{totalArticles}</Badge></Panel.Body>
                <ProgressBar className="cart_progress" now={now} />
            </Panel>
        </div>);
    }
}

export default CartHeaderItem;
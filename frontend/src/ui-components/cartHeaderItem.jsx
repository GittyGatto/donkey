import React, {Component} from 'react';
import {Badge, Button, ButtonGroup, Glyphicon, Panel, ProgressBar} from "react-bootstrap";

class CartHeaderItem extends Component {

    render() {
        const {saveHandler, purchase, completedArticles, totalArticles, deleteHandler} = this.props;
        const now = completedArticles / totalArticles * 100;

        return (<div>
            <Panel className="cart_item">
                <Panel.Heading>
                    <Panel.Title componentClass="h2">
                        {purchase.name}
                        <ButtonGroup className="cart_item_buttonGroup">
                            <Button className="cart_item_button"
                                    bsStyle="danger"
                                    onClick={(ev) => deleteHandler(ev)}><Glyphicon className="big_icon"
                                                                                   glyph="trash"/></Button>
                        </ButtonGroup>
                    </Panel.Title>
                </Panel.Heading>
                <Panel.Body>Status: <Badge>{completedArticles}</Badge> / <Badge>{totalArticles}</Badge></Panel.Body>
                <ButtonGroup className="status_bar_buttonGroup">
                    <Button className="status_bar__button"
                            bsStyle="info"
                            onClick={(ev) => saveHandler(ev)}><Glyphicon className="big_icon"
                                                                         glyph="save"/></Button>
                </ButtonGroup>
                <ProgressBar className="cart_progress" now={now}/>
            </Panel>
        </div>);
    }
}

export default CartHeaderItem;
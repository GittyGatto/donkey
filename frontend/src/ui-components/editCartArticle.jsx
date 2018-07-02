import React, {Component} from 'react';
import {Badge, Button, ButtonGroup, Glyphicon, Table} from "react-bootstrap";

export default class EditCartArticle extends Component {

    render() {
        const {addHandler, removeOneHandler, backHandler, article, purchase} = this.props;

        let minusButtonActive = undefined;
        if (article.amount > 1) {
            minusButtonActive = true;
        } else {
            minusButtonActive = false;
        }

        return (<div>
            <h1>{purchase.name}</h1>
            <Button className="big_button"
                    bsStyle="info"
                    bsSize="lg"
                    onClick={(ev) => backHandler(ev)}><Glyphicon className="big_icon" glyph="chevron-left"/></Button>
            <Table className="cartArticles">
                <tbody className={"cart_article_" + article.done}>
                <tr>
                    <td><Badge className="big_badge">{this.props.article.amount}</Badge></td>
                    <td>{this.props.article.articleName}</td>
                    <td>
                        <ButtonGroup>

                            <Button className="cart_item_button"
                                    bsSize="lg"
                                    bsStyle="success"
                                    onClick={(ev) => addHandler(ev, article)}>
                                <Glyphicon className="big_icon"
                                           glyph="plus"/></Button>

                            <Button className="cart_item_button"
                                    bsStyle="danger"
                                    bsSize="lg"
                                    disabled={!minusButtonActive}
                                    onClick={(ev) => removeOneHandler(ev, article)}>
                                <Glyphicon className="big_icon"
                                           glyph="minus"/></Button>

                        </ButtonGroup>
                    </td>
                </tr>
                </tbody>
            </Table>
        </div>);
    }
}
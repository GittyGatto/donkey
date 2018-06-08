import React, {Component} from 'react';
import {Button} from "react-bootstrap";

export default class ArticleItem extends Component {

    render() {
        const {articleChangeHandler, value} = this.props;

        return (
            <Button bsStyle="info"
                    className="big_button"
                    onClick={(ev) => articleChangeHandler(ev, value)}>

                {this.props.article.articleName}

            </Button>
        );
    }
}
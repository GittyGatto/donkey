import React, {Component} from 'react';
import {Button} from "react-bootstrap";

export default class ArticleItem extends Component {

    render() {
        const {articleChangeHandler, value, article} = this.props;

        return (
            <Button className="big_button"
                    bsStyle="success"
                    bsSize="lg"
                    onClick={(ev) => articleChangeHandler(ev, value)}>

                {article.articleName}

            </Button>
        );
    }
}
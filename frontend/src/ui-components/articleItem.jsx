import React, {Component} from 'react';

export default class ArticleItem extends Component {

    render() {
        const {changeHandler, value} = this.props;

        return (
            <button className="btn btn-primary"
                onClick={(ev) => changeHandler(ev, value)}>
                {this.props.article.articleName}
            </button>
        );
    }
}
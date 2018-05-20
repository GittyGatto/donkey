import React, {Component} from 'react';
import './articleItem.css'

export default class ArticleItem extends Component {

    render() {
        const {changeHandler, value} = this.props;

        return (
            <button className="btn btn-primary articleItem"
                onClick={(ev) => changeHandler(ev, value)}>
                {this.props.article.name}
            </button>
        );
    }
}
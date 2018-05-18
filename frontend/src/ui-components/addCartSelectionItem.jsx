import React, {Component} from 'react';

export default class AddCartSelectionItem extends Component {

    render() {
        const {newCartHandler} = this.props;

        return (
            <button className="btn-xs btn-info"
                    onClick={(ev) => newCartHandler(ev)}>
                <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
            </button>
        );
    }
}
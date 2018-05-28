import React, {Component} from 'react';

export default class CartSelectionItem extends Component {

    render() {
        const {changeHandler, value} = this.props;

        return (
            <button className="btn cart btn-secondary"
                    onClick={(ev) => changeHandler(ev, value)}>
                {this.props.cart.name}
            </button>
        );
    }
}
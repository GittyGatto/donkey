import React, {Component} from 'react';
import './cartButton.css'

export default class CartSelectionItem extends Component {

    render() {
        const {changeHandler, value} = this.props;

        return (
            <button className="btn cart"
                    onClick={(ev) => changeHandler(ev, value)}>
                {this.props.cart.name}
            </button>
        );
    }
}
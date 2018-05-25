import React, {Component} from 'react';
import './cartItem.css'

class CartHeaderItem extends Component {

    render() {
        const {saveHandler, saveEnabled, purchase} = this.props;
        return (
            <div className="list-group-item header">
                {purchase.name}
                <div className="saveButton">
                    <button className="btn btn-info"
                            onClick={(ev) => saveHandler(ev)}>Save
                    </button>
                </div>
            </div>
        );
    }
}

export default CartHeaderItem;
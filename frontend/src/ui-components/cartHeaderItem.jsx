import React, {Component} from 'react';
import './cartItem.css'

class CartHeaderItem extends Component {

    render() {
        const {saveHandler, saveEnabled} = this.props;
        return (
            <div className="list-group-item header">
                Einkauf
                <div className="saveButton">
                    <button className="btn btn-info"
                            onClick={(ev) => saveHandler(ev)}
                            disabled={!saveEnabled}>Save
                    </button>
                </div>
            </div>
        );
    }
}

export default CartHeaderItem;
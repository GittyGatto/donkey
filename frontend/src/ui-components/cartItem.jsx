import React, {Component} from 'react';
import './cartItem.css'

class CartItem extends Component {
    render() {

        const {addHandler, removeOneHandler, removeArticleHandler, doneHandler, article} = this.props;

        return (
            <div className="list-group-item">

                <form>
                    <div className="form-check">
                        <span className="badge">{this.props.article.amount}</span>
                        <input type="checkbox" className="form-check-input"
                               onChange={(ev) => doneHandler(ev, article)}
                               checked={this.props.article.done}></input>
                        {this.props.article.articleName}
                    </div>
                </form>

            </div>
        );
    }
}

export default CartItem;
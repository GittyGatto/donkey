import React, {Component} from 'react';
import './cartItem.css'

class CartItem extends Component {
    render() {

        const {addHandler, removeOneHandler, removeArticleHandler, article} = this.props;

        return (
            <div className="list-group-item">

                <div className="article_amount"><span className="badge">{this.props.article.amount}</span>
                </div>
                {this.props.article.articleName}

                <div className="btn-group" role="group" aria-label="...">
                    <button type="button" className="btn-sm btn-success"
                            id="addButton"
                            onClick={(ev) => addHandler(ev, article)}>
                        <span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                    </button>

                    <button type="button" className="btn-sm btn-info"
                            id="removeOneButton"
                            onClick={(ev) => removeOneHandler(ev, article)}>
                        <span className="glyphicon glyphicon-minus-sign" aria-hidden="true"></span>
                    </button>

                    <button type="button" className="btn-sm btn-danger"
                            id="removeOneButton"
                            onClick={(ev) => removeArticleHandler(ev, article)}>
                        <span className="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>
                    </button>
                </div>

            </div>
        );
        }
}

export default CartItem;
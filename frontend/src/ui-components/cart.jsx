import React from 'react';
import CartItem from  "./cartItem";


export default class Cart extends React.Component {

    render() {
        const {changeHandler} = this.props;

        let cartItem;
        if (this.props.purchase) {
            cartItem = this.props.purchase.map((article) => {
                return (
                    <div key={article.title}>
                        <CartItem article={article}/>
                    </div>
                );
            });
        }

        return (<div>
            {cartItem}
        </div>);
    }
}

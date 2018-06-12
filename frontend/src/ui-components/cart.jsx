import React from 'react';
import CartItem from  "./cartItem";


export default class Cart extends React.Component {

    render() {
        const {article} = this.props;

        let cartItem;
        if (this.props.purchase) {
            cartItem = article.map((article) => {
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

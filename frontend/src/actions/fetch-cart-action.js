import {dispatcher} from '../util/mini-flux';
import CartResource from '../api/cart-resource';

export default function fetchCart(cartName) {
    CartResource.fetchCart(cartName,
        function (result) {
            dispatcher.dispatch({
                type: "cartFetched",
                data: result
            })
        }, function (resp) {
            if( resp.statusCode === 404 ) {
                dispatcher.dispatch({
                    type: "cartFetchFailed",
                    data: {
                        message: "No such cart.",
                        messageType: "info"
                    }
                })
            } else {
                dispatcher.dispatch({
                    type: "cartFetchFailed",
                    data: {
                        message: "Internal server error.",
                        messageType: "danger"
                    }
                })
            }
        });
};


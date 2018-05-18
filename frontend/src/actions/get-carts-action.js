import {dispatcher} from '../util/mini-flux';
import CartResource from '../api/cart-resource';

export default function getCarts() {
    CartResource.getCarts(function (result) {
        dispatcher.dispatch({
            type: "cartsReceived",
            data: result
        })
    });
}


import {dispatcher} from '../util/mini-flux'
import CartResource from "../api/cart-resource";

export default function saveNewCart(cart) {
    CartResource.saveCart(cart,
        function (result) {
            dispatcher.dispatch({
                type: "cartNameSubmitted",
                data: result
            })
        }, function () {
            dispatcher.dispatch({
                type: "cartNameSubmitFailed"
            })
        });
}


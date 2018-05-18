import {dispatcher} from '../util/mini-flux'
import CartResource from "../api/cart-resource";

export default function saveCartName(cart) {
    CartResource.saveCartName(cart,
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


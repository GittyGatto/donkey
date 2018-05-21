import {dispatcher} from '../util/mini-flux'
import CartResource from "../api/cart-resource";

export default function deleteCart(request) {
    CartResource.deleteCart(request,
        function (result) {
            dispatcher.dispatch({
                type: "purchaseDeleted",
            })
        }, function () {
            dispatcher.dispatch({
                type: "purchaseDeleteFailed"
            })
        });
}


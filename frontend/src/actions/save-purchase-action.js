import {dispatcher} from '../util/mini-flux';
import CartResource from '../api/cart-resource'

export default function savePurchase(purchase) {
    CartResource.saveCart(purchase,
        function (result) {
            dispatcher.dispatch({
                type: "purchaseSaved"
            })
        }, function () {
            dispatcher.dispatch({
                type: "savePurchaseFailed"
            })
        });
}


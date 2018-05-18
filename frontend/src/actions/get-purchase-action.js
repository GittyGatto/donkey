import {dispatcher} from '../util/mini-flux';

export default function getPurchase(cartName) {
    dispatcher.dispatch({
        type: "cartArticlesReceived",
        data: cartName
    })
}
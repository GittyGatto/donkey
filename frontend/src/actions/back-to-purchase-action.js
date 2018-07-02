import {dispatcher} from '../util/mini-flux'

export default function backToPurchase(ev) {
    dispatcher.dispatch({
        type: "backToPurchaseClicked",
    })
}

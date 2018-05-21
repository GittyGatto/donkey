import {dispatcher} from '../util/mini-flux'

export default function backToCarts() {
    dispatcher.dispatch({
        type: "backToCartsClicked",
    })
}


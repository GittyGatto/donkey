import {dispatcher} from '../util/mini-flux'

export default function newCart() {
    dispatcher.dispatch({
        type: "newCartClicked",
    })
}


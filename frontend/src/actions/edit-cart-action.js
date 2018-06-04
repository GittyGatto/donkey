import {dispatcher} from '../util/mini-flux'

export default function editCart() {
    dispatcher.dispatch({
        type: "editCartClicked",
    })
}


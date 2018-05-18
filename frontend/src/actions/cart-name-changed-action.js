import {dispatcher} from '../util/mini-flux'

export default function cartNameChanged(newValue) {
    dispatcher.dispatch({
        type: "cartNameChanged",
        value: newValue
    })
}


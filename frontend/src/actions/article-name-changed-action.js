import {dispatcher} from '../util/mini-flux'

export default function articleNameChanged(newValue) {
    dispatcher.dispatch({
        type: "articleNameChanged",
        value: newValue
    })
}

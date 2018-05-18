import {dispatcher} from '../util/mini-flux'

export default function cartReset() {
    dispatcher.dispatch({
        type: "cartReseted",
    })
}


import {dispatcher} from '../util/mini-flux'

export default function changeCategory(newCategory) {
    dispatcher.dispatch({
        type: "categoryChanged",
        category: newCategory
    })
}


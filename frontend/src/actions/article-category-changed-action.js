import {dispatcher} from '../util/mini-flux'

export default function articleCategoryChanged(category) {
    dispatcher.dispatch({
        type: "articleCategoryChanged",
        category: category
    })
}

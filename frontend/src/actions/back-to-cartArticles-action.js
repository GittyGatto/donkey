import {dispatcher} from '../util/mini-flux'

export default function backToCartArticles(ev) {
    dispatcher.dispatch({
        type: "backToCartArticlesClicked",
    })
}

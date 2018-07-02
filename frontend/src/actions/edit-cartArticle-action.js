import {dispatcher} from '../util/mini-flux'

export default function editCartArticle(cartArticle) {
    dispatcher.dispatch({
        type: "editCartArticleClicked",
        article: cartArticle
    })
}


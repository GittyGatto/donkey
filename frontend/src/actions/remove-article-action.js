import {dispatcher} from '../util/mini-flux'

export default function removeArticle(article) {
    dispatcher.dispatch({
        type: "articleRemoved",
        article: article
    })
}


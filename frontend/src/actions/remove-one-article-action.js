import {dispatcher} from '../util/mini-flux'

export default function removeOneArticle(article) {
    dispatcher.dispatch({
        type: "oneArticleRemoved",
        article: article
    })
}


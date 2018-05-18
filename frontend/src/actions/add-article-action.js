import {dispatcher} from '../util/mini-flux'

export default function addArticle(newArticle) {
    dispatcher.dispatch({
        type: "articleAdded",
        article: newArticle
    })
}


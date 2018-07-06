import {dispatcher} from '../util/mini-flux'

export default function newArticle() {
    dispatcher.dispatch({
        type: "newArticleClicked",
    })
}


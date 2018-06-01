import {dispatcher} from '../util/mini-flux'

export default function checkedArticle(article) {
    dispatcher.dispatch({
        type: "articleChecked",
        article: article
    })
}

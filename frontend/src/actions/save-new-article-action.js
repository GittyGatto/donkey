import {dispatcher} from '../util/mini-flux'
import ArticleResource from "../api/article-resource";

export default function saveNewArticle(article) {
    ArticleResource.saveArticle(article,
        function (result) {
            dispatcher.dispatch({
                type: "newArticleSaved",
                data: result
            })
        }, function () {
            dispatcher.dispatch({
                type: "articleNameSubmitFailed"
            })
        });
}

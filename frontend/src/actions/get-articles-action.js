import {dispatcher} from '../util/mini-flux';
import ArticleResource from '../api/article-resource';

export default function getArticles() {
    ArticleResource.getArticles(function (result) {
        dispatcher.dispatch({
            type: "articlesReceived",
            data: result
        })
    });
}


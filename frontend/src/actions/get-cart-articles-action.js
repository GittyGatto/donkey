import {dispatcher} from '../util/mini-flux';
import ArticleResource from '../api/article-resource';

export default function getCartArticles(cartName) {
    ArticleResource.getCartArticles(cartName,
        function (result) {
            dispatcher.dispatch({
                type: "cartArticlesReceived",
                data: result,
                cartName: cartName
            })
        }
    );
};


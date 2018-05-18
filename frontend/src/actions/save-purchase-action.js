import {dispatcher} from '../util/mini-flux';
import ArticleResource from '../api/article-resource';

export default function savePurchase(purchase) {
    ArticleResource.savePurchase(purchase,
        function (result) {
            dispatcher.dispatch({
                type: "purchaseSaved"
            })
        }, function () {
            dispatcher.dispatch({
                type: "savePurchaseFailed"
            })
        });
}


import {dispatcher} from '../util/mini-flux';
import CategoryResource from '../api/category-resource';

export default function getCategoryArticles(categoryName) {
    CategoryResource.getCategoryArticles(categoryName,
        function (result) {
            dispatcher.dispatch({
                type: "categoryArticlesReceived",
                data: result,
                categoryName: categoryName
            })
        }
    );
};


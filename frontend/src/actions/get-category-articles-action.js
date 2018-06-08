import {dispatcher} from '../util/mini-flux';

export default function getCategoryArticles(categoryName) {
    dispatcher.dispatch({
        type: "categoryChanged",
        data: categoryName
    })
};


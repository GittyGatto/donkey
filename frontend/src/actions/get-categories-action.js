import {dispatcher} from '../util/mini-flux';
import CategoryResource from '../api/category-resource';

export default function getCategories() {
    CategoryResource.getCategories(function (result) {
        dispatcher.dispatch({
            type: "categoriesReceived",
            data: result
        })
    });
}

